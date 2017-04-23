var express = require("express");

var router = express.Router();

// Import the model (pizza.js) to use its database functions.
var pizza = require("../models/pizza.js");

//ROUTES CODE GOES HERE

// Export routes for server.js to use.
module.exports = router;
