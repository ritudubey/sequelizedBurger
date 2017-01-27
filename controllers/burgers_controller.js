var express = require("express");

var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");
var db= require("../models");
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // burger.all(function(data) {
  //   var hbsObject = {
  //     burgers: data
  //   };
  //   console.log(hbsObject);
  //   res.render("index", hbsObject);
  // });
   db.Burger.findAll({}).then(function(result){
      //res.json(result);
    var hbsObject = {
      burgers: result
    };
    console.log(hbsObject);
    res.render("index", hbsObject);

    });
});

router.post("/burgers/create", function(req, res) {
  // burger.create(["burger_name", "devoured"],
  // [req.body.burgername, false], 
  // function() {
  //   res.redirect("/burgers");
  // });
  db.Burger.create({
    burger_name:req.body.burgername
  }).then(function sucess(result){
    //res.json(result);
    res.redirect("/burgers");
  }
  // , function error(result){
  //   console.log("Error adding burger");
  //   res.json({message: "Error adding burger"});
  // }
  );
});

router.put("/burgers/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  // burger.update({
  //   devoured: req.body.devoured
  // }, condition, function() {
  //   res.redirect("/burgers");
  // });

      console.log("inside update");
     db.Burger.update(
       {
         devoured:req.body.devoured
        },
      {
        where: {
        id:req.params.id
      }
    }).then(function(result){
      //res.json(result);
      res.redirect("/burgers");
    });
});

// Export routes for server.js to use.
module.exports = router;