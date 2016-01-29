"use strict";
//Connection to the database
var db = require('../config/connection.js');

module.exports = {

    getReccommendation: function(info){
      return new Promise(function(resolve, reject) {
        console.log(info.specialityValue);
        console.log(info.locationValue);
        let query = `
        MATCH (uniType:Speciality {title: "${info.specialityValue}"})-[:SPECIALISES_IN]-(uni)-[:IS_LOCATED_IN_THE]-(locality:Region {title: "${info.locationValue}"}),
          (uni)-[likes:LIKES]-(), (uni)-[dislikes:DISLIKES]-()
            WITH uniType, locality, uni, likes, dislikes
              RETURN uniType, locality, uni, count(DISTINCT likes) AS LIKES, count(DISTINCT dislikes) AS DISLIKES, count(DISTINCT likes) - count(DISTINCT dislikes) AS TOTAL
            `;

            db.cypher({ query }, (err, results) => {
              if (err) {
                console.log(err.message.errors);
                reject(err);
              }

          let uniInfo = {
              uniName: results[0].uni.properties.title,
              uniLikes: results[0].Likes,
              uniLocation: results[0].locality.properties.title,
              uniType: results[0].sportUni.properties.title
            };
              resolve(uniInfo);
            });
          });
        },

        insertReccommendation: function(info){
          return new Promise(function(resolve, reject) {

            let query = `MATCH (p:Person {name:'API User'}), (u:University {title: '${info.uniName}'}) CREATE (p)-[:${info.rating}]->(u)`;

            console.log(query);

            db.cypher({ query }, (err, results) => {
              if (err) {
                console.log(err.message.errors);
                reject(err);
              }

              resolve(results);
            });
          });
        }
};
