const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const models = require('./models');
const bodyParser = require('body-parser');
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.engine('handlebars', exphbs({
	layoutsDir: './views/layouts',
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views/');

var dashboard = require('./controllers/dashboard');
app.use('/dashboard', dashboard);

var register = require('./controllers/register');
app.use('/register', register);

app.get('/', function(req, res) {
    res.render('index/index');
});

app.post('/sign-up', function(req, res) {
    // Handle sign-in
    // If success show dashboard
    // else return to index with an error message
});

module.exports = app;

app.listen(port, function(){
    console.log("App listening on http://localhost:" + port);
});
