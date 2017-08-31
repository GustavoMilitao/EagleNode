var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  user = require('./eagle.entities/user'), 
  team = require('./eagle.entities/team'), 

  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;

var uri = "mongodb://eckounltd:cefet123@custerpokemon-shard-00-00-zznsg.mongodb.net:27017,custerpokemon-shard-00-01-zznsg.mongodb.net:27017,custerpokemon-shard-00-02-zznsg.mongodb.net:27017/pokedeck?ssl=true&replicaSet=CusterPokemon-shard-0&authSource=admin";
mongoose.connect(uri); 

var cookieParser = require('cookie-parser');



app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routesPokemon = require('./eagle.api/routes/pokemonRoutes');
var routesSkill = require('./eagle.api/routes/skillRoutes');    
var routesUser = require('./eagle.api/routes/userRoutes');      
var routesTeam = require('./eagle.api/routes/teamRoutes');      
var routesLogin = require('./eagle.core/routes/loginRoutes');    
var routesHome = require('./eagle.core/routes/homeRoutes');      

routesTeam(app); 
routesPokemon(app);
routesSkill(app); 
routesUser(app); 
routesLogin(app);
routesHome(app);

var path = require('path');

// app.use('/content',express.static(path.join(__dirname, './eagle.ui.interface/content')));
// app.use('/scripts',express.static(path.join(__dirname, './eagle.ui.interface/scripts')));
// app.use('/fonts',express.static(path.join(__dirname, './eagle.ui.interface/fonts')));
app.use('/eagle.ui.interface',express.static(path.join(__dirname, './eagle.ui.interface')));
app.engine('html', require('ejs').renderFile);

require("openurl").open("http://localhost:"+port.toString()+"/");

app.listen(port);
