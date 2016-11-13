const express = require('express'),
    router = express.Router(),
    path = require("path");

/* GET layout */
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
});

//fixing for angular page reload
router.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
});

module.exports = router;