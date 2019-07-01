var express = require('express');
var router = express.Router();

router.get('/api', (req, res) => {
	res.send({express: "EXPRESS IS CONNECT TO REACT"})
})

module.exports = router;
