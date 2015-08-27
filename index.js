var fs = require("fs");
var Handlebars = require("handlebars");
var moment = require('moment');


function render(resume) {
	var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
	var template = fs.readFileSync(__dirname + "/resume.template", "utf-8");
	
	var short_date = 'MMM YYYY';
	var medium_date = 'MMM DD, YYYY';

	Handlebars.registerHelper('date', function(date) {
		return moment(date).format(short_date);
	});

	Handlebars.registerHelper('medium_date', function(date) {
		return moment(date).format(medium_date);
	});

	return Handlebars.compile(template)({
		css: css,
		resume: resume
	});
}

module.exports = {
	render: render
};
