const express = require('express');
const models = require('../models');
const router = express.Router();

//const passport = require('../middlewares/authentication');
//const Redirect = require('../middlewares/redirect');

// Handle sign-in
// If success show dashboard
// else return to index
router.get('/', function(req, res) {
	res.send("Sign in page");
});

module.exports = router;

/*module.exports = {
  registerRouter() {

  	const router = express.Router();
    router.get('/', Redirect.ifLoggedIn('/dashboard'), this.index);
    router.post('/', this.signin);

    return router;
  },
  index(req, res) {
    res.render('signin', { error: req.flash('error') });
  },
  login(req, res) {
    passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/signin',
      failureFlash: true,
      successFlash: true,
    })(req, res);
  },
};*/