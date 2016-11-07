const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/', function(req, res) {
	res.render('register/register');
    // Handle register
    // if success show profile
    // else return to index with an error message
});

router.post('/', function(req, res) {
	console.log(req.body);
	models.User.create({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	}).then(function(users) {
		res.redirect('register/list')
	})
});

router.get('/list', function(req, res) {
	models.User.findAll({})
	.then(function (users) {
		if(users != null) {
			res.render('register/list', {users: users});
		} else {
			res.send('No Users found');
		}
	});
});

module.exports = router;
