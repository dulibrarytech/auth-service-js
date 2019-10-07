'use strict';

var express = require('express'),
    config = require('./config'),
    bodyParser = require('body-parser');

module.exports = function () {
    var app = express();

    if (process.env.NODE_ENV.toLowerCase() === 'prod') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    require('../auth/routes')(app);

    return app;
};