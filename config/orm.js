var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(table) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      console.log(result);
    });
  },
  insertOne: function(whatToInsert, table) {
    var queryString = "INSERT ?? INTO ??";
    console.log(queryString);
    connection.query(queryString, [whatToInsert, table], function(err, result) {
      console.log(result);
    });
  },
  updateOne: function(table, whatToUpdate, tableOneCol) {
    var queryString = "UPDATE ?? SET ?? WHERE ??";

    connection.query(queryString, [table, whatToUpdate, tableOneCol], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;
