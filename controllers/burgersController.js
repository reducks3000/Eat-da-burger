// connect model/burger.js to burger_controller
// connect index.handlebars (which then connects public/burgers.js) to controller

var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.select(function(data) {
    var hbsObject = {
      burgers: data
    };
    //console.log(hbsObject);
    console.log(
      "inside burgers_Controller.js get/  hbsObject: ",
      hbsObject.burgers
    );
    res.render("index", hbsObject);
  });
});

// create new row
router.post("/api/burgers", function(req, res) {
  req.body.devoured = false;
  burger.insert("burgers", [req.body.burgerName, req.body.devoured], function(
    result
  ) {
    // Send back the ID of the new burger order
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.update(
    { id: req.body.id, devoured: req.body.devoured },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("inside burgers_con Delete ", condition);
  burger.delete(condition, function(result) {
    console.log("RESULT!!!", result);
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Export routes for server.js to use.
module.exports = router;
