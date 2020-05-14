const express = require('express');
var PouchDB = require('pouchdb');

const port = process.env.PORT || 8080;
const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/db', require('express-pouchdb')(PouchDB));
console.log('Listening at port :' + port);

app.listen(port);
