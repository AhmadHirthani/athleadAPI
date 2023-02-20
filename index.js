require("dotenv").config();
const { startServer } = require('./server');

// const connectToFirebase = require('./firebase/connectToFirebase');
// Connect to Firebase
// connectToFirebase();
const PORT = process.env.PORT || 3001;

startServer(PORT);
