"use strict";
//Anything talking to the neo4j database will occur here

var databaseQuery = require('../config/database.js');
module.exports = function(app, connection) {

  app.get('/', function(req, res) {
      res.render('index.ejs'); // load the index.ejs file
  });

  app.post('/update', function(req, res) {
    databaseQuery.getReccommendation(req.body)
      .then(function (data) {
        console.log(data);
          res.send(data);
      })
      .catch(function (e) {
          res.status(500, {
              error: e
          });
      });

  });

  console.log(connection);
  console.log(databaseQuery);

};
