var express = require('express');
// var app = express();
var playerRoutes = function(){

    var pg = require('./lib/postgres');
    // Your database configuration
    var DATABASE_URL = "postgres://" + process.env.DB_USER + ":" + process.env.DB_PWD + "@" + process.env.DB_HOST + ":" + process.env.DB_PORT + "/" + process.env.DB_NAME;

    // Connect to mysql database
    pg.initialize(DATABASE_URL, function(err) {
        if (err) {
            console.log("caught the err");
        // throw err; //who the hell is supposed to handle this...??
        }
        // console.log('Database connection has been made');
    });


    // create express router object for player
    var playerRouter = express.Router();

    // a GET resource to the root of a resource returns a list of that resource.
    playerRouter.get('/', function(req, res){
        res.send('Welcome to players hub in GSpot!');
        res.end();

    });

    
    
    
    
    
    // a POST resource to the root of a resource creates a aresource.
    playerRouter.post('/', function(req, res){
        var sql = 'INSERT INTO test.players (p_id, p_name) VALUES ($1,$2) RETURNING p_id';
        // Retrieve the data to insert from the POST body
        var data = [
            req.body.playerName
            //, req.body.playerId
        ];
        postgres.client.query(sql, data, function(err, result) {
            if (err) {
                // We shield our clients from internal errors, but log them
                console.error(err);
                res.statusCode = 500;
                return res.json({
                    errors: ['Failed to create photo']
                });
            }

            var newPlayerId = result.rows[0].id;
            var sql = 'SELECT * FROM test.players WHERE p_id = $1';
            postgres.client.query(sql, [ newPlayerId ], function(err, result) {
                if (err) {
                    // We shield our clients from internal errors, but log them
                    console.error(err);
                    res.statusCode = 500;
                    return res.json({
                        errors: ['Could not retrieve player after create']
                    });
                }
                // The request created a new resource object
                res.statusCode = 201;
                // The result of CREATE should be the same as GET
                res.json(result.rows[0]);
            });

        });

    });






    // We specify a param in our path for the GET of a specific object
    playerRouter.get('/:id', function(req, res) {

    });

    // Similar to the GET on an object, to update it we can PATCH
    playerRouter.patch('/:id', function(req, res) {

    });

    // Delete a specific object
    playerRouter.delete('/:id', function(req, res) {

    });
    return playerRouter;
};

module.exports = playerRoutes;
