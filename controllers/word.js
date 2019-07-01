 var Word = require('../models/word');

module.exports = {
	getAll
}

function getAll(req, res) {
	Word.find({}, function (err, words){
		res.render('index', { 
			title: 'Express API',
			words
		});
	});
}