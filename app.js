var express = require('express');
var app = express();

// Routes declarations
var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

// Definition for all the routes

// Home route
app.get('/', routes.home);

// Movie single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

// Not found
app.get('*', routes.notFound);

app.listen(process.env.PORT || 3000);