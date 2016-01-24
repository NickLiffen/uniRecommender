"use strict";
module.exports = function(app, connection) {

  console.log(connection);

  app.get('/', function(req, res) {
      res.render('index.ejs'); // load the index.ejs file
  });
};
