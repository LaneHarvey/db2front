var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = "postgres://postgres:@localhost/thursday";

var app = express();
module.exports = app;

var massiveInstance = massive.connectSync({connectionString : connectionString});

app.set('db', massiveInstance);

// var db = app.get('db');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../public'));

var animalCtrl = require('./controllers/animalCtrl');

app.get('/api/animals', animalCtrl.getAllAnimals);
app.post('/api/animal', animalCtrl.createAnimal);

var port = 9001;
app.listen(port, function(){
  console.log("It's working on ", port);
});
