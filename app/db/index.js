'use strict';
const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);

Mongoose.connection.on('error', function(err) {
    console.log("MongoDB error: ", err);
});

module.exports = {
    Mongoose
}