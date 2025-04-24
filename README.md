<h1 align="center">🎮 Gesture-Controlled Media Player</h1>

<p align="center">
  This project integrates a Node.js and Express.js backend with MongoDB for user authentication, 
  and utilizes Python's OpenCV and MediaPipe for gesture recognition to control media playback directly in the browser interface.
</p>

<h2>🚀 Features</h2>
<ul>
  <li>User registration and login with MongoDB.</li>
  <li>Hand gesture recognition using OpenCV and MediaPipe.</li>
  <li>Gesture-based media controls (play/pause, volume, navigation).</li>
  <li>Responsive UI with Handlebars and custom CSS.</li>
</ul>

<p align="center">
  <img src="https://github.com/user-attachments/assets/fbde6d16-30e3-4a23-b354-f659c8453bce" width="45%" />
  <img src="https://github.com/user-attachments/assets/2c1aea82-17fb-4244-9987-f4adbefa7774" width="35%" />
</p>

<h2>🛠️ Technologies Used</h2>
<ul>
  <li><strong>Backend:</strong> Node.js, Express.js</li>
  <li><strong>Database:</strong> MongoDB, Mongoose</li>
  <li><strong>Frontend:</strong> Handlebars (hbs), HTML, CSS</li>
  <li><strong>Gesture Recognition:</strong> Python, OpenCV, MediaPipe, PyAutoGUI</li>
</ul>

<h2>📌 Prerequisites</h2>
<ul>
  <li>Python 3.8+</li>
  <li>Node.js 14+</li>
  <li>MongoDB installed locally or via MongoDB Atlas</li>
</ul>

<h2>📦 Installation</h2>
<ol>
  <li>Clone the repository:<br><code>git clone https://github.com/nehakarnati/gesturecontrolled-mediaplayer.git</li>
  <li>Install MongoDB Compass (optional but recommended).</li>
  <li>Navigate into the project folder:<br><code>cd gesture-login</code></li>
  <li>Install Node.js dependencies:<br><code>npm install express hbs mongoose</code></li>
  <li>Install Python dependencies:<br><code>pip install opencv-python mediapipe pyautogui</code></li>
  <li>Ensure MongoDB is running locally or connected via URI.</li>
</ol>

<h3>▶️ Run the App</h3>
<ol>
  <li>Connect to your database using MongoDB Compass or set your MongoDB URI.</li>
  <li>Start the Node.js server:<br><code>nodemon src/index.js</code></li>
  <li>Open your browser at <code>http://localhost:3000</code>.</li>
</ol>

<h3>🔐 Authentication Flow</h3>
<ul>
  <li>Use the signup page to create a new account.</li>
  <li>Login with your credentials.</li>
</ul>

<h3>🖐️ Gesture Control</h3>
<ul>
  <li>Click "Start" on the home page to initiate gesture recognition (runs <code>gesture.py</code>).</li>
  <li>Use hand gestures to control video playback.</li>
  <li>Click "Stop" to terminate gesture recognition.</li>
</ul>

<h2>📁 Project Structure</h2>

<p align="center">
  <img src="https://github.com/user-attachments/assets/955941f4-2171-4efb-a845-eb997ab7d03e" width="70%" />
</p>

<h2>🧠 Gesture Controls</h2>
<ul>
  <li><strong>0 fingers:</strong> Stop</li>
  <li><strong>1 finger:</strong> Play/Pause</li>
  <li><strong>2 fingers:</strong> Volume Up</li>
  <li><strong>3 fingers:</strong> Volume Down</li>
  <li><strong>4 fingers:</strong> Forward</li>
  <li><strong>5 fingers:</strong> Backward</li>
</ul>

<hr>

<p align="center">
  by Neha
</p>
