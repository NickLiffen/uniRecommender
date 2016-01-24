"use strict";
//Connection to the database
var db = require('../config/connection.js');

module.exports = {

    getReccommendation: function(info){
      return new Promise(function(resolve, reject) {
        console.log(info.specialityValue);
        console.log(info.locationValue);
        const query = `
        MATCH (sportUni:Speciality {title: "${info.specialityValue}"})-[:SPECIALISES_IN]-(uni)-[:LIKES]-(),
          (uni)-[:IS_LOCATED_IN_THE]-(locality:Region{title: "${info.locationValue}" })
            RETURN sportUni, uni, locality, count(*) AS Likes ORDER BY Likes DESC LIMIT 1
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
        }


};
