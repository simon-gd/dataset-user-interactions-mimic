
var path = require('path');
var fs = require('fs');
var AdmZip = require('adm-zip');
var cfg = JSON.parse(fs.readFileSync("./package.json"));
var async = require("async");
var inputDatapath = cfg.main;

//console.log("mongo dirver path", global.MONGOOSE_DRIVER_PATH);

if(cfg.db.current == "tingo"){
  require('tungus');  
}

var mongoose = require('mongoose');

console.log('Running mongoose version %s', mongoose.version);
var Record = require("./schema.js")(mongoose).model;//mongoose.model('Record');

/**
 * Connect to the local db file
 */
var dbString = (cfg.db.current == "tingo") ? 'tingodb://'+__dirname+'/'+cfg.db.tingo.path 
                                           : 'mongodb://'+ cfg.db.mongo.host +'/'+cfg.db.mongo.db; 

mongoose.connect(dbString, function (err) {
  // if we failed to connect, abort
  if (err) throw err;

  // we connected ok
  loadData();
});

function processExternalFile(filepath){
  var stat = fs.statSync(filepath);
  var ext = path.extname(filepath).substr(1);
  if(ext === "zip"){
    var zip = new AdmZip(filepath);
      var zipEntries = zip.getEntries(); // an array of ZipEntry records
      if(zipEntries.length > 1){
        console.warning("dataStore: Warning: Currently support zips with one file.");
      }
      var zipEntry = zipEntries[0];
       var uncompressedData = zip.readAsText(zipEntry);
      return JSON.parse(uncompressedData);
  }else{
    console.warning("dataStore: Warning: Currently only support zipped json files as externalfile.");
  }   
};  
function processExternalSeries(externalData, name, args, typeFilter, typeFilter2){
  var outputSeries = {count:0};
  for (var key in args) {
    outputSeries[key] = [];
  }

  for (var g=0; g < externalData[name].length; g++){

    var dataPt = externalData[name][g];

    if(!typeFilter || typeFilter == dataPt.type || (typeFilter2 && typeFilter2 == dataPt.type)){
      for (var key in args) {
        try{
          var mykey = args[key];
          var stringCall = "var p = dataPt."+mykey;
          eval(stringCall);
          if(p){
            outputSeries[key].push(p);  
          }else{
            outputSeries[key].push("");  
          }
        }catch(err){
          console.error("processExternalSeries: ", err);
          outputSeries[key].push("");
        }       
      } 

    }
  }

  outputSeries.count = outputSeries.time.length;
  return outputSeries;
}

function addExternalData(record, extranlPath, done){

  var externalData = processExternalFile(extranlPath);

  var mouse_moves = processExternalSeries(externalData, "mouse_move_event", {time:"time",x:"x",y:"y"});
  var mouse_click = processExternalSeries(externalData, "mouse_click_event", {time:"time",x:"x",y:"y", id:"e.target.id"});
  var keydown_event = processExternalSeries(externalData, "keydown_event", {time:"time",x:"key", y:"e.which", id:"e.target.id"});
  var scroll_event = processExternalSeries(externalData, "scroll_event", {time:"time",x:"dx", y:"dy"});
  var reseize = processExternalSeries(externalData, "misc_event", {time:"time",x:"x", y:"y"}, "resize");
  var focusin = processExternalSeries(externalData, "misc_event", {time:"time",id:"e.target.id"}, "focus", "focusin");
  var focusout = processExternalSeries(externalData, "misc_event", {time:"time",id:"e.target.id"}, "blur", "focusout");
  var mousewheel = processExternalSeries(externalData, "misc_event", {time:"time"}, "mousewheel");

  record.mouse_moves = mouse_moves;
  record.mouse_click = mouse_click;
  record.keydown_event = keydown_event;
  record.scroll_event = scroll_event;
  record.reseize = reseize;
  record.focusin = focusin;
  record.focusout = focusout;
  record.mousewheel = mousewheel;
  record.save(function (err) {
    if (err){ 
      console.error("addExternalData: save: ", err);
      done(err);
    }else{
      console.log("record saved");
      done();  
    } 
  });

}

function createRecord (rawDataItem, done) {
  //console.log("createRecord");

  Record.create({
    id: rawDataItem.id
  , user: rawDataItem.user 
  , condition: rawDataItem.experiment.survey_condition
  , time: rawDataItem.time
  , question_id: rawDataItem.question.id
  , answer_1: rawDataItem.answer.a1
  , answer_2: (rawDataItem.answer.a2) ? rawDataItem.answer.a2.replace(/\,/g,"") : rawDataItem.answer.a2
  , answer_4: rawDataItem.answer.a4
  , comments: rawDataItem.answer.a3_comments
  , other_comments: rawDataItem.answer.other_comments
  , confidence: rawDataItem.confidence
  , window_w: rawDataItem.window_w
  , window_h: rawDataItem.window_h
  }, function (err, rec) {
    
    if (err){ 
      console.error("error: ", err, rec);
      done(err);
    } else {  

      addExternalData(rec, rawDataItem.user_events, function(err){
        console.log("createRecord: ", rec.id); 
        done(err);   
      });
      
      

    }
  });
}

function loadData () {
  console.log("createData");
  fs.readFile(inputDatapath, 'utf8', function (err, datain) {
    if (err) {
      finaldone(err);
    }
    datain = JSON.parse(datain);
    //datain.length
    
    //async.each([0,1,2,3,4,5,6,7,8,9], function(k, callback){
    async.each(datain, function(k, callback){  
      createRecord(k, function(err){
        if(err){ console.error("createData", err); }
        callback();  
      });
    }, function(err){
      // wer are done with all records
      finaldone(err);
    });

  });//fs.readFile
}

/**
 * Data generation
 */
function createData () {
  console.log("createData");
  /*
  Console.create({
      name: 'Nintendo 64'
    , manufacturer: 'Nintendo'
    , released: 'September 29, 1996'
  }, function (err, nintendo64) {
    if (err) return done(err);

    Game.create({
        name: 'Legend of Zelda: Ocarina of Time'
      , developer: 'Nintendo'
      , released: new Date('November 21, 1998')
      , consoles: [nintendo64]
    }, function (err) {
      if (err) return done(err);
      example();
    })
  })*/
}

/**
 * Population
 */

function example () {
  /*
  Game
  .findOne({ name: /^Legend of Zelda/ })
  .populate('consoles')
  .exec(function (err, ocinara) {
    if (err) return done(err);
    console.log(ocinara);

    console.log(
        '"%s" was released for the %s on %s'
      , ocinara.name
      , ocinara.consoles[0].name
      , ocinara.released.toLocaleDateString());

    done();
  })*/
}

function finaldone (err) {
  
  if (err) console.error(err);
  mongoose.disconnect();

  /*
  Console.remove(function () {
    Game.remove(function () {
      mongoose.disconnect();
    })
  })
 */
}