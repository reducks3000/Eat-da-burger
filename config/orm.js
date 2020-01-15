var connection = require("./connection.js");

// Creates the methods that will execute the necessary MySQL commands in the controllers.
// These are the methods to use to retrieve and store data in burgersDB.
var connection = require("./connection.js");
var orm = {
  // will select any column name or *
  select: function(whatToSelect, tableInput, cb) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [whatToSelect, tableInput], function(
      err,
      result
    ) {
      if (err) {
        throw err;
      }
      //console.log(result);
      console.log("inside orm select  result= " + result);
      cb(result);
    });
  },
  // will insert with data specified
  insert: function(tableInput, info, cb) {
      // use the code functions above to substitute "?" for provided values pass in
    var queryString = `INSERT INTO burgers(burgerName, devoured) VALUES (?, ?);`;

    //console.log("inside orm insert" + queryString + " colname: " + colNames + " valcol:" + valOfCol);
    connection.query(queryString, info, function(err, result) {
      if (err) {
        console.log(" ORM insert error ", queryString);
        throw err;
      }
      cb(result);
      //console.log(result);
      console.log("inside orm insert  result= " + result);
    });
  },

  // will update with data specified
  update: function(tableInput, objcolVals, whichToUpdate, cb) {
     //var queryString = "UPDATE ?? SET " + objToSql(objColVals) + " WHERE ??";
     // explicity name the column headings and the variables to complete the sql statement
    var queryString =
      "UPDATE burgers SET devoured = true WHERE " + whichToUpdate;
    console.log("inside orm update" + queryString);
    //connection.query(queryString, [tableInput, colNames, whichToUpdate], function(err, result) {
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      //console.log(result)
      cb(result);
      console.log("inside orm update  result= " + result);
    });
  },
  // will update with data specified
  delete: function(whichToDelete, cb) {
      // explicity name the column headings and the variables to complete the sql statement
    var queryString = "DELETE FROM burgers " + "WHERE " + whichToDelete;

    console.log("inside orm delete" + queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log("inside orm delete  result= " + result);
      cb(result);
    });
  }
};
module.exports = orm;