"use strict";
//Anything talking to the neo4j database will occur here

var databaseQuery = require('../config/database.js');
module.exports = function(app) {

  app.get('/', function(req, res) {
      res.render('index.ejs'); // load the index.ejs file
  });

  app.get('/recommend', function(req, res){
    res.render('recommend.ejs');
  });

  app.post('/recommend', function(req,res){
    databaseQuery.insertReccommendation(req.body)
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

};
