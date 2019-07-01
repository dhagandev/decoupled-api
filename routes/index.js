var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/api', (req, res) => {
	res.send({express: "EXPRESS IS CONNECT TO REACT"})
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
    successRedirect : 'back',
    failureRedirect : '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('back');
});

module.exports = router;
