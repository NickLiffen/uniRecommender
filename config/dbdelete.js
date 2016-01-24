"use strict";

const db = require('./connection.js');

const query = `MATCH (n) DETACH DELETE n`;

db.cypher({ query }, (err) => {

  if (err) {
    return console.log(err);
  }
  console.log('Database Deleted');
});
