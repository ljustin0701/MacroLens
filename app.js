var express = require('express');
var app = express();

const port = 5000;

var dashboard = require('./controllers/dashboard');
app.use('/dashboard', dashboard);

app.get('/', function(req, res) {
    res.send("This is the index page");
});

app.listen(port, function(){
    console.log("App listening on http://localhost:" + port);
});
