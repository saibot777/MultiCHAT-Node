'use strict';
const express = require('express');
const app = express();
const chatCat = require('./app');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(chatCat.session);

app.use('/', chatCat.router);

app.get('/', (req, res, next) => {
    res.render('login');
});

app.listen(app.get('port'), () => {
    console.log('ChatAPP Running on Port: ', app.get('port'));
});