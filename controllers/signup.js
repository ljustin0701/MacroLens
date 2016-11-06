const express = require('express');
const models = require('../models');
const router = express.Router();

// Handle sign-in
// If success show dashboard
// else return to index
router.get('/', function(req, res) {
	res.send("Sign up page");
});

module.exports = router;
