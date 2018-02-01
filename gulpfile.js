//create a ref to gulp(gulp is just a task runner)
var gulp = require('gulp'),
nodemon = require('gulp-nodemon');

//tell gulp we have a task to run..(call it a default task) and use that to execute our nodemon plugin
gulp.task('default', function(){
    //callback function to setup nodemon 
    nodemon({ //nodemon will take a json object to configure itself
        //script: what to run
        //ext: tell nodemon what to watch for..watch js extensions
        //PORT : you can actually set up ENV from nodemon.. so we setup PORT from here and pass it to `app.js`
        // ignore: we don't want nodemon to confuse, by the modules we install.. so we ask nodemon to ignore everything under node modules folder.
        //we want to know when ever nodemon is restarted, so we will do .on restart... lets execute the function to log to console.
        script: 'app.js', 
        ext: 'js', 
        env: {
            PORT: 8000,
            DB_USER : "ecomuser",
            DB_PWD: "ecomdashpwd",
            DB_HOST: "ecomdb.cquhgooihhhn.us-east-1.rds.amazonaws.com",
            DB_PORT: 5432,
            DB_NAME: "gspot"
        },
        ignore: ['./node_modules/**']
    })
    .on('restart', function(){
    console.log('Restarting');
    });
});

