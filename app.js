var express = require('express'),
    bodyParser = require('body-parser');

//instance of express
var app = express();
// enables our Express application to parse incoming JSON post bodies
app.use(bodyParser.json({ type: 'application/json' }));

// 2 ways of getting port
var port = process.env.PORT || 3000;

// load external routes
playerRouter = require('./playerRoutes')();

// Attach the routers for their respective paths
app.use('/players', playerRouter); 

//SET UP HANDLER FOR ROUTE(route, callback func(req sent,response received))
app.get('/',function(req, res){
    // req.send('welcome to GSpot!');
    res.send('Welcome to GSpot!');
    // We must end the request when we are done handling it
    res.end();
});

app.listen(port,function(){
    console.log("GULP is runnig on port: "+ port);
});


module.exports = app;
