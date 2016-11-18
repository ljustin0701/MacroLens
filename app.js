const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
//const passport = require('./middlewares/authentication');
//const viewHelpers = require('./middlewares/viewHelpers')
const models = require('./models');

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

//Set up static files
app.use(express.static('./public'));

//Setting up passport authentication
//app.use(passport.initialize());
//app.use(passport.session());
//app.use(viewHelpers.register());

//Controller uses - Should probably change these three lines to the way edgardo did it on the CTP blog 
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
