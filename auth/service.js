'use strict';

const config = require('../config/config.js'),
      ldapClient = require('simple-ldap-client');  

exports.authenticateUser = function(username, password) {
	return new Promise(function(fulfill, reject) {
		let baseDn = config.ldapBaseDn;
		let ldap = new ldapClient(config.ldapUrl, baseDn);
		 	
		try {
			ldap.authenticate({ upn: "uid=" + username + "," + baseDn, password: password })
			.then(() => {
			  fulfill(true);
			})
			.catch(error => {
			  console.log('LDAP authentication not successful: ' + username)
			  console.error(error.message);
			  fulfill(false);
			})
		}
		catch (e) {
			reject(e.message);
		}
	});
}