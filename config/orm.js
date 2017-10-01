// Import MySQL connection.
var connection = require("../config/connection.js");


// Object for all our SQL statement functions.
var orm = {
    selectAll: function(cb) {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(value, cb) {
      var queryString = "INSERT INTO burgers (burger, devoured, createdAt) VALUES (?, FALSE, CURRENT_TIMESTAMP)";
      console.log(queryString);
      connection.query(queryString, [value], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    updateOne: function(whatToUpdate, cb) {
      var queryString = "UPDATE burgers SET devoured = TRUE, createdAt = CURRENT_TIMESTAMP WHERE id = ?";
      console.log(queryString);
      connection.query(queryString, [whatToUpdate], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
  };
  
  module.exports = orm;
  