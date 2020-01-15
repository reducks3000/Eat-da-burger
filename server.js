// ===============================================================================
// LOAD DATA
// We are linking our routes to our data source. 
// This data source holds array of information on each survey participant.
// ===============================================================================
// Dependencies
// need to run npm install and init on these
// =============================================================
var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// set express app to parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// so client is responded to appropriately
  var routes = require("./controllers/burgersController.js");
 
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
