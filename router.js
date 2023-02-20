const express = require('express');
const router = express.Router();
const { getHomePage } = require('./functions/homePage');
const { getAllUsers, addNewUser, getUserById } = require('./functions/users');
const validateToken=require("./middlewares/validateToken")

router.get('/', getHomePage);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/addnewuser', addNewUser);
router.get('/hello', validateToken,hello);

function hello(req,res) {
    console.log("you passed the middleware with a valid token");
    res.status(200).send("you passed the middleware with a valid token")
}

module.exports = router;
