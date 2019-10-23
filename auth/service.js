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
			  console.log('LDAP authentication successful: %s', username)
			  fulfill(true);
			})
			.catch(error => {
			  console.log('LDAP authentication not successful: %s %s %s', username, error.message)
			  fulfill(false);
			})
		}
		catch (e) {
			reject(e.message);
		}
	});
}