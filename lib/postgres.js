
var pg = exports; 
exports.constructor = function pg(){};

var pgLib = require('pg');

pg.initialize = function(databaseUrl, cb) {
  var client = new pgLib.Client(databaseUrl);
  // establishing connection
  client.connect(function(err) {
    if (err) {
      console.log("could not establish connection");
      return cb(err);
    }
    console.log("Successfully created connection");
    //connection established
  
    pg.client = client;
    pg.client.end(
      function(err){
        if(err){
          console.log("connection close statement failed");
          return cb(err);
        }else{
          console.log("Successfully closed connection");
        }
      }
    );
    cb();//sending the cursor back to caller... without any additional data as response... in simple words.. callback getting executed
  });
};