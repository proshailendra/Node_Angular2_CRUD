const express = require("express"),
    router = express.Router();

router.use("/user", require("../controllers/user.api"));

module.exports = router;