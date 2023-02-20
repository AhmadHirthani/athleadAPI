const { getDbRef } = require('../firebase/firebaseAdmin');

function getAllUsers(req, res) {
  console.log('getAllUsers called');
  const usersRef = getDbRef('Users');
  usersRef.once('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    res.send(data);
  });
}

function getUserById(req, res) {
  console.log('getUserById called');
  const id = req.params.id;
  const userRef = getDbRef(`Users/${id}`);
  userRef.once('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      console.log(data);
      res.send(data);
    } else {
      res.status(404).send('User not found');
    }
  });
}



function addNewUser(req, res) {
  console.log('add new user called');

  const { name, email } = req.body;
  // code to add new user to database or data store
  res.send('User added successfully');
}

module.exports = { getAllUsers, addNewUser, getUserById };
