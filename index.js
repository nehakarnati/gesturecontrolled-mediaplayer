const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb");
const { spawn } = require("child_process");


const templatePath = path.join(__dirname, "../templates");
let gestureProcess = null;

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password
    };

    await collection.insertMany([data]);
    res.render("home");
});

app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.name });
        if (check.password === req.body.password) {
            res.render("home");
        } else {
            res.send("Wrong password");
        }
    } catch {
        res.send("Wrong details");
    }
});

// Endpoint to start the gesture recognition script
app.post("/start-gesture", (req, res) => {
    if (!gestureProcess) {
        gestureProcess = spawn("python", ["gesture.py"], {
            cwd: __dirname
        });

        gestureProcess.stdout.on("data", (data) => {
            console.log(`Gesture Output: ${data}`);
        });

        gestureProcess.stderr.on("data", (data) => {
            console.error(`Gesture Error: ${data}`);
        });

        gestureProcess.on("close", (code) => {
            console.log(`Gesture process exited with code ${code}`);
            gestureProcess = null;
        });

        res.sendStatus(200);
    } else {
        res.status(400).send("Gesture recognition is already running.");
    }
});

// Endpoint to stop the gesture recognition script
app.post("/stop-gesture", (req, res) => {
    if (gestureProcess) {
        gestureProcess.kill();
        gestureProcess = null;
        res.sendStatus(200);
    } else {
        res.status(400).send("Gesture recognition is not running.");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
