'use strict';

const config = require('../config/config'),
	  Controller = require('./controller');

module.exports = function (app) {
    app.route('/')
        .get(function(req, res) {
            res.sendStatus(403);
    });

    app.post("/api/v1/authenticate", function(req, res, next) {
    	if(config.ips.includes(req.ip)) { next() }
        else { res.sendStatus(403) }
    }, function(req, res, next) {
    	Controller.authenticate(req, res);
    });
};