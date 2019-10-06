'use strict';

const config = require('../config/config.js');

exports.authenticateUser = function(username, password) {
	var response = [username, password];
	return new Promise(function(fulfill, reject) {
		fulfill(response);
	});
}