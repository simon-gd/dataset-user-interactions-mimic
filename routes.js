var express = require('express');
var router = express.Router();
var tungus = require('tungus');
var mongoose = require('mongoose');
mongoose.connect('tingodb://db_data');
var schema = require('./schema')(mongoose);
var fs = require("fs");

console.log('Running mongoose version %s', mongoose.version);

router.get('/', function(req, res) {
  res.render('index', { title: 'Dataset Instructions' });
});

router.get('/context.html', function(req, res) {
  res.render('context', { title: 'Hotel Simulation Context' });
});

router.get('/data.json', function(req, res) {
  var data = require("./data.json");
  res.status(200).jsonp(data);
});


router.get('/db_export', function(req, res) {
  var model = schema.model;
  //console.log(model);
  model.find(function(err, records){
    if(err){
      console.error(err);
      res.status(500).send(err);
    }else{
      if(records){
         fs.writeFile("data.json", JSON.stringify(records), function (err) {
            res.status(200).send("Records saved");
         });
      }else{
        res.send("No Records Found");
      }
    }
  });
  
});

router.get('/schema.json', function(req, res) {
  var myschema = require("./json_table_schema.json");

  var contextURL = req.protocol + '://' + req.get('host') + "/context.html";
  myschema.c8 = { "samplesPerSecond": 2,
    "plot_resampled_data": true,
    "default_start_time": "January 1, 2014 00:00:00",
    "time-scale": "second",
    "views": [
      { "name": "Heatmap",
        "type": "heatmap",
        "intensity": 0.5,
        "context-data": {"url": contextURL+"?question={0}&condition={1}", "args": ["question_id", "condition"]},
        "context-width": 1000,
        "context-height": 1000,
        "data-paths": {"mouse-moves":{"field": "mouse_moves",
                                      "x":"x",
                                      "y":"y",
                                      "time":"time"}}      
      }
    ]
  };
  res.status(200).jsonp(myschema);
});

router.get('/datapackage.json', function(req, res) {
  var baseUrl = req.protocol + '://' + req.get('host');
  var  datapackage = {name: "dataset-user-interactions-mimic",
                      title: "User Interactions Mimic",
                      base: baseUrl,
                      resources: [{path: "data.json",
                                   format: "json",
                                   schema: "schema.json"}],
                      };
	res.status(200).jsonp(datapackage);
});

module.exports = router;
