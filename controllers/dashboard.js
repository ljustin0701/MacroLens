var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send("This is the dashboard page");
});

router.get('/new', function(req, res) {
    res.send("This is the page for uploading a new photo");
});

router.post('/', function(req, res) {
    // check if success upload pic then return to dashboard
});

router.get('/:photoID', function(req, res) {
    res.send("This is the page for photo with id: " + req.params.photoID);
});

router.get('/:photoID/edit', function(req, res) {
    res.send("This is the page for editing  photo with id: " + req.params.photoID);
});

module.exports = router;
