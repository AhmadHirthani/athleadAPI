const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: 'https://athlead-test-default-rtdb.firebaseio.com',
});

function getDbRef(collectionName) {
  const db = firebaseAdmin.database();
  return db.ref(collectionName);
}

module.exports = { getDbRef,firebaseAdmin };
