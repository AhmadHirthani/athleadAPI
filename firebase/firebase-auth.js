const admin = require('./firebase-admin');
const auth = admin.auth();

function createUser(email, password) {
  return auth.createUser({
    email: email,
    password: password
  });
}

function signIn(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

module.exports = {
  createUser: createUser,
  signIn: signIn
};
