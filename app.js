var express = require('express');
var app = express();

const port = 5000;

var dashboard = require('./controllers/dashboard');
app.use('/dashboard', dashboard);

app.get('/', function(req, res) {
    res.send("This is the index page");
});

app.post('/sign-up', function(req, res) {
    // Handle sign-in
    // If success show dashboard
    // else return to index with an error message
});

app.post('/register', function(req, res) {
    // Handle register
    // if success show profile
    // else return to index with an error message
});

app.get('/:id', function(req, res) {
    res.send("This is the profile page for user id: " + req.params.id);
});

module.exports = app;

app.listen(port, function(){
    console.log("App listening on http://localhost:" + port);
});
