var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src'));

app.listen('3000');
console.log('Server working on 3000!');