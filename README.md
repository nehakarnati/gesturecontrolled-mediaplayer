# gesturecontrolled-mediaplayer
This project integrates a Node.js and Express.js backend with MongoDB for user authentication, and utilizes Python's OpenCV and MediaPipe for gesture recognition to control media playback.​

**Features**

1. User registration and login with MongoDB.

2. Hand gesture recognition using OpenCV and MediaPipe.

3. Gesture-based media controls (play/pause, volume, navigation).

4. Responsive UI with Handlebars and custom CSS.​

![img1](https://github.com/user-attachments/assets/fbde6d16-30e3-4a23-b354-f659c8453bce)

![img2](https://github.com/user-attachments/assets/2c1aea82-17fb-4244-9987-f4adbefa7774)



**Technologies Used**

Backend: Node.js, Express.js

Database: MongoDB, Mongoose

Frontend: Handlebars (hbs), HTML, CSS

Gesture Recognition: Python, OpenCV, MediaPipe, pyautogui​

**Installation**

1. Clone the repository:
git clone https://github.com/yourusername/gesture-login.git
2. cd gesture-login

**Install Node.js dependencies**

i. npm install express hbs mongoose

2. pip install opencv-python mediapipe pyautogui

3. Ensure MongoDB is running:

**Start the server with nodemon:**
1. nodemon src/index.js

2. Access the application:
   Open your browser and navigate to http://localhost:3000.

3. Sign up or log in:

   Use the signup page to create a new account.

   Log in with your credentials.​

4. Control media with gestures:

   On the home page, click "Start" to initiate gesture recognition.

   Use hand gestures to control media playback.

   Click "Stop" to end gesture recognition.​


**Project Structure**

![img3](https://github.com/user-attachments/assets/955941f4-2171-4efb-a845-eb997ab7d03e)



**Gesture Controls**

0 fingers: Stop

1 finger: Play/Pause

2 fingers: Volume Up

3 fingers: Volume Down

4 fingers: Forward

5 fingers: Backward​
