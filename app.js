var express = require('express'), 
bodyParser = require('body-parser'),
logger = require('morgan'),
path = require('path');
// http = require('http');


//instance of express
var app = express();
// enables our Express application to parse incoming JSON post bodies
app.use(bodyParser.json({ type: 'application/json' }));


//logger addition to our application
app.use(logger("short")); 


// sets up the public directory path, using Node's path module
var publicDirectoryPath = path.resolve(__dirname,"public");
app.use(express.static(publicDirectoryPath)); // Sends static files from the public directory path


// load external routes
playerRouter = require('./playerRoutes')();

// Attach the routers for their respective paths
app.use('/players', playerRouter); 

/* 
Middleware to log every request to console and then passes control to the next request handler,
which is meant to handle the request.
*/
app.use(function(req, res, next){
    console.log(`Request received from '${req.url}' path`);
    next();// callback; calls the respective request handler meant to handle the current request
});

//SET UP HANDLER FOR ROUTE(route, callback func(req sent,response received))
app.get('/',function(req, res){
    // req.send('welcome to GSpot!');
    res.send('Welcome to GSpot!');
    // We must end the request when we are done handling it
    res.end();
});

app.get("/hello/:who", function(req, res){
    res.end(`Hello, ${req.params.who}.`);
    //Fun fact: this has some security issues, which we can address a bit later!
});

//  If you miss all the above request handlers, server will execute the below request handler
app.use(function(req, res){
    console.log(`Page 404 was sent for the request path: '${req.url}'`);
    res.statusCode = 404;
    res.end("Page Not Found, 404 Error!");
});

// 2 ways of getting port number
var port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log("GULP is runnig on port: " + port);
});


module.exports = app;
