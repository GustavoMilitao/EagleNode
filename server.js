var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),

  
  BankingAccount = require('./eagle.entities/BankingAccount'), 
  Car = require('./eagle.entities/Car'), 
  CarPieceCustoma = require('./eagle.entities/CarPieceCustoma'), 
  CreditCar = require('./eagle.entities/CreditCard'), 
  Customer = require('./eagle.entities/Customer'), 
  Distributor = require('./eagle.entities/Distributor'), 
  Driver = require('./eagle.entities/Driver'), 
  Order = require('./eagle.entities/Order'), 
  OrderPayment = require('./eagle.entities/OrderPayment'), 
  Product = require('./eagle.entities/Product'), 


  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;

var uri = "mongodb://eckounltd:cefet123@custerpokemon-shard-00-00-zznsg.mongodb.net:27017,custerpokemon-shard-00-01-zznsg.mongodb.net:27017,custerpokemon-shard-00-02-zznsg.mongodb.net:27017/eagle?ssl=true&replicaSet=CusterPokemon-shard-0&authSource=admin";
mongoose.connect(uri); 

var cookieParser = require('cookie-parser');



app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routesBankingAccount = require('./eagle.api/routes/BankingAccountRoutes');
var routesCarPieceCustoma = require('./eagle.api/routes/CarPieceCustomaRoutes');
var routesCar = require('./eagle.api/routes/CarRoutes');
var routesCreditCard = require('./eagle.api/routes/CreditCardRoutes');
var routesCustomer = require('./eagle.api/routes/CustomerRoutes');
var routesDistributor = require('./eagle.api/routes/DistributorRoutes');
var routesDriver = require('./eagle.api/routes/DriverRoutes');
var routesOrderPayment = require('./eagle.api/routes/OrderPaymentRoutes');
var routesOrder = require('./eagle.api/routes/OrderRoutes');
var routesProduct = require('./eagle.api/routes/ProductRoutes');
var routesLogin = require('./eagle.core/routes/loginRoutes');    
var routesHome = require('./eagle.core/routes/homeRoutes');      

routesBankingAccount(app); 
routesCarPieceCustoma(app); 
routesCar(app); 
routesCreditCard(app); 
routesCustomer(app); 
routesDistributor(app); 
routesDriver(app); 
routesOrderPayment(app); 
routesOrder(app); 
routesProduct(app); 
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
