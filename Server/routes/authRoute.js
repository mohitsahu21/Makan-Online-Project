const express = require("express");
const {userRegistration,loginController} = require('../controller/userController.js')

const router = express.Router();

router.post("/register", userRegistration);
router.post("/login", loginController);


module.exports = router;
