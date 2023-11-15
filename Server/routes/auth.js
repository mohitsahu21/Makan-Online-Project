const express = require("express");

const router = express.router();

router.post("/register", userRegistration);

module.exports = router;
