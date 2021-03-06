var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/api/test', (req, res) => {
	res.send({express: "EXPRESS IS CONNECT TO REACT"})
})

router.get('/api/auth', (req, res) => {
	res.send({auth: "send auth deal"})
})
// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/users',
    failureRedirect : '/users'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/users');
});

module.exports = router;
