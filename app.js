const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const models = require('./models');
const bodyParser = require('body-parser');

var dashboard = require('./controllers/dashboard');
var register = require('./controllers/register');
var signin = require('./controllers/signin');

const port = 5000;

// Bodyparser set up
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Handlebars set up
app.engine('handlebars', exphbs({
	layoutsDir: './views/layouts',
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views/');

// Controller uses
app.use('/dashboard', dashboard);
app.use('/register', register);
app.use('/signin', signin);

// Homepage route
app.get('/', function(req, res) {
    res.render('index/index');
});

module.exports = app;

app.listen(port, function(){
    console.log("App listening on http://localhost:" + port);
});
