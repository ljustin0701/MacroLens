const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
var models = require('./models');
var bodyParser = require('body-parser');
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.engine('handlebars', exphbs({
	layoutsDir: './views/layouts',
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', '${__dirname}/views/');

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

app.get('/register', function(req, res) {
	res.render('register/register');
    // Handle register
    // if success show profile
    // else return to index with an error message
});

app.post('/register', function(req, res) {
	console.log(req.body);
	models.User.create({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		username: req.body.username,
		email: req.body.email
	})
});

app.get('/:id', function(req, res) {
    res.send("This is the profile page for user id: " + req.params.id);
});

module.exports = app;

app.listen(port, function(){
    console.log("App listening on http://localhost:" + port);
});
