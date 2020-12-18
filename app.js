var express = require('express');
const cors = require('cors');
var exphbs  = require('express-handlebars');
var port = process.env.PORT || 3000

var app = express();
app.use(cors());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('assets'));
 
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/detail', function (req, res) {
    res.render('detail', req.query);
});
app.get('/thankyou', function (req, res) {
    res.render('thankyou', req.query);
});
app.get('/error', function (req, res) {
    res.render('error', req.query);
});
app.get('/pending', function (req, res) {
    res.render('pending', req.query);
});

app.use('/api/mp', require('./api/mp'));

app.listen(port, () =>console.log('Server started'))