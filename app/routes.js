"use strict";
//Anything talking to the neo4j database will occur here

var databaseQuery = require('../config/database.js');
module.exports = function(app, connection) {

  app.get('/', function(req, res) {
      res.render('index.ejs'); // load the index.ejs file
  });

  console.log(connection);
  console.log(databaseQuery);

};
