var orm = require('../config/orm.js');

var burger = {
  // Find all burgers in the burgers table.
  selectAll: function(cb) {
    orm.selectAll(function(res) {
        cb(res);
      }
    );
  },
  // Insert new burger into the burgers table.
  insertOne: function(burger, cb) {
    orm.insertOne(
      burger,
      function(res) {
        cb(res);
      }
    );
  },
  // Updates the devoured field in the burgers table.
  updateOne: function(id, cb) {
    orm.updateOne(
      id,
      function(res) {
        cb(res);
      }
    );
  }
};

module.exports = burger;
