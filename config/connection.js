const neo4j = require('neo4j');

const db = new neo4j.GraphDatabase({
  url: 'http://localhost:7474',
  auth: {
    username: 'neo4j',
    password: 'rob'
  }
});

module.exports = db;
