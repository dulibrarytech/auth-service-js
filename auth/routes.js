/**
 * @file 
 *
 * Auth module routes
 *
 */
'use strict'

var Controller = require('./controller');

module.exports = function (app) {

    app.route('/')
        .get(function(req, res) {
            res.sendStatus(403);
    });

    app.get("/api/v1/authenticate", (req, res, next) => {
        Controller.authenticate(req, res);
    });
};