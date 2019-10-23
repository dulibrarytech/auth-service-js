'use strict';

const config = require('../config/config'),
	  Auth = require('./service');

exports.authenticate = function(req, res) {
	if(!req.body.username || !req.body.password) {
		res.sendStatus(400);
	}
	else {
		let uname = req.body.username.trim().replace(/<[^>]*>/g, '').substring(0,50) || "";
		let pword = req.body.password.trim().replace(/<[^>]*>/g, '').substring(0,50) || "";

		Auth.authenticateUser(uname, pword).catch(error => {
			console.log("Error authenticating with LDAP: ", error)
			res.sendStatus(500);
		}).then(response => {
			if(response === true) {
				res.json({auth: true})
			}
			else {
				res.json({auth: false})
			}
		});
	}
}