"use strict";

//Import all node modules
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

//Load the .env file from root directory.
dotenv.load();
//Puts express onto the application
const app  = express();
//Port which the node server will run on.
const port = process.env.PORT || 8080;

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

//Setting our Template Engine to EJS
app.set('view engine', 'ejs'); // set up ejs for templating
app.use(express.static(__dirname + '/public'));
app.use('/vendor', express.static(__dirname + '/bower_components'));

//Passing our Passport Information and Application Information to our routes
require('./app/routes.js')(app);

app.listen(port);
console.log('Server connection established');
console.log('Using The Following Port: ' + port);
