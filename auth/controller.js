'use strict';

const config = require('../config/config'),
	  Auth = require('./service');

exports.authenticate = function(req, res) {
	var uname = "testu", pword = "testp";
	Auth.authenticateUser(uname, pword).catch(error => {
		console.log("TEST error", error)
	}).then(response => {
			console.log("TEST response", response)
		res.json(response);
	});
}