"use strict";

var express = require('express');
var app = express();

app.get('/', function (req, resp) {
    resp.send("Hello world!")
})

let server = app.listen(3000);
console.log("Rodando servidor na porta: " + server.address().port)