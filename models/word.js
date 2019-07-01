var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wordSchema = new Schema(
{
	word: {
		text: String,
		definition: String
	}
})

module.exports = mongoose.model('Word', wordSchema)

