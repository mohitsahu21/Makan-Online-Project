const express = require("express");

const router = express.router();

router.post("/registered_data", userRegistration);

module.exports = router;
