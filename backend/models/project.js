'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
	name: String,
	description: String,
	category: String,
	year: Number,
	langs: String,
	image: String
});

module.exports = mongoose.model('Project', ProjectSchema);
// mongoose guarda los documentos en la colección projects (pone en minúscula y pluraliza el Project)