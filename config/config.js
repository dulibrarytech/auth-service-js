module.exports = {
	ips: process.env.ALLOWED_IPS.split(","),
	ldapUrl: process.env.LDAP_URL + ":" + process.env.LDAP_PORT,
	ldapBaseDn: process.env.LDAP_BASE_DN
}