const { firebaseAdmin } = require('../firebase/firebaseAdmin'); 

function validateToken(req, res, next) {
  const idToken = req.headers.authorization.split(" ")[1];
  if (!idToken) {
    return res.status(401).send("Unauthorized");
  }
  try {
    firebaseAdmin.auth().verifyIdToken(idToken).then((decodedToken) => {
      // const uid = decodedToken.uid;
      next();
    })
  } catch (error) {
    console.error(`Error verifying token: ${error}`);
    res.status(401).send("Invalid token");
  }
}

module.exports=validateToken;







// const express = require("express");
// const admin = require("firebase-admin");
// const serviceAccount = require("../serviceAccountKey.json");

// // Initialize Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// // Create Express app
// const app = express();

// // Endpoint for token validation
// app.post("/validateToken", async (req, res) => {
//   const idToken = req.headers.authorization.split(" ")[1];
//   if (!idToken) {
//     return res.status(401).send("Unauthorized");
//   }
//   try {
//     admin.auth().verifyIdToken(idToken).then((decodedToken) => {
//       const uid = decodedToken.uid;
//       // Do something with the UID, such as checking if it exists in your database
//       console.log(`Successfully verified token for UID: ${uid}`);
//       res.send("Valid token");
//     })

//   } catch (error) {
//     console.error(`Error verifying token: ${error}`);
//     res.status(401).send("Invalid token");
//   }
// });

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
