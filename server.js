var express = require('express')
var bodyParser = require ('body-parser')
var logger = require('morgan');


var app = express()

app.use(bodyParser.json())
app.use(logger ('dev'))
app.use(require('./controllers'))

app.listen(3000,
	function() {
	console.log('Server listening on 3000', 3000)
})