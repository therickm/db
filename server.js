const express = require('express');
var PouchDB = require('pouchdb');

const port = process.env.PORT || 8080;
const app = express();

app.use('/db', require('express-pouchdb')(PouchDB));
console.log('Listening at port :' + port);

app.listen(port);
