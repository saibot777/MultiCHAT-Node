'use strict';
const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);

Mongoose.connection.on('error', function(err) {
    console.log("MongoDB error: ", err);
});

const chatUser = new Mongoose.Schema({
    profileId: String,
    fullName: String,
    profilePic: String
});

let userModel = Mongoose.model('chatUser', chatUser);

module.exports = {
    Mongoose,
    userModel
}