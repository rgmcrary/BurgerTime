var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(table) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      console.log(result);
    });
  },
  insertOne: function(value) {
    var queryString = "INSERT INTO burgers (burger, devoured, date) VALUES (??, FALSE, CURRENT_TIMESTAMP)";
    console.log(queryString);
    connection.query(queryString, [value], function(err, result) {
      console.log(result);
    });
  },
  updateOne: function(whatToUpdate) {
    var queryString = "UPDATE burgers SET (devoured = TRUE, date = CURRENT_TIMESTAMP) WHERE (id = ??)";
    console.log(queryString);
    connection.query(queryString, [whatToUpdate], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;
