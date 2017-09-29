var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(table) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      console.log(result);
    });
  },
  insertOne: function(table, whatToInsert, values) {
    var queryString = "INSERT INTO ?? (??, ??, ??) VALUES (??, ??, ??)";
    console.log(queryString);
    connection.query(queryString, [table, whatToInsert], function(err, result) {
      console.log(result);
    });
  },
  updateOne: function(table, whatToUpdate, values) {
    var queryString = "UPDATE ?? SET (??, ??, ??) WHERE (??, ??, ??)";

    connection.query(queryString, [table, whatToUpdate, tableOneCol], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;
