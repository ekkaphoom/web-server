var express = require('express');
var app = express();
var port = 3000;
var middleware=require('./middleware.js');

// app.use(middleware.requireAuthentication);
 app.use(middleware.logger);

app.get('/', function(req, res) {
    res.send('Hello Express!');
});
app.get('/about',middleware.requireAuthentication, function(req, res) {
    res.send('About Us')
});
app.use(express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/public'));
// console.log(__dirname+'/public');
app.listen(port, function() {
    console.log('starting app ' + port);
});