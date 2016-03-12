var express = require('express')
var bodyParser = require ('body-parser')
var logger = require('morgan');

var app = express()

app.use(bodyParser.json())
app.use(logger ('dev'))
app.use(require('./controllers'))

app.use('/api/sessions',
	require('./controllers/api/sessions'))
app.use('/api/users',
	require('./controllers/api/users'))

var server = app.listen(3010, function () {
  console.log('server listening on %d', server.address().port)
})