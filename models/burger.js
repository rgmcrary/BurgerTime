var orm = require("./config/orm.js");

// Find all burgers in the burgers table.
orm.selectAll("burgers");

// Insert new burger into the burgers table.
orm.insertOne("burgers", (burger, devoured, date), ("", FALSE, CURRENT_TIMESTAMP));

// Updates the devoured field in the burgers table.
orm.updateOne("burgers", (burger, devoured, date), ("", TRUE, CURRENT_TIMESTAMP));

module.exports = burger;
