const express = require("express");
const {Register,Allregister, Login} = require('../controller/UserController')

const router = express.Router();

router.post("/register",Register );
router.get("/",Allregister );
router.post("/login",Login );


module.exports = router;
