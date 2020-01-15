// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  select: function(cb) {
    orm.select("*","burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insert: function(tableInput,info, cb) {
    orm.insert("burgers", info, function(res) {
      cb(res);
    });
  },
   // The variables objColVals is an object.
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
   // whichOne is the condition
   delete: function(whichOne, cb) {
     console.log("model for delete " + whichOne);
    orm.delete(whichOne, function(res) {
      cb(res);
    });
  }
};
// Export the database functions for the controller (burgers_controller.js).
module.exports = burgers;