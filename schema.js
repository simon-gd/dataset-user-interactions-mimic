
/**
 * Record schema
 */
module.exports = function(mongoose) {
  var Schema = mongoose.Schema;

  var recordSchema = new Schema({
      id: Number
    , user: Number 
    , condition: Number
    , time: Number
    , question_id: Number
    , answer_1: Number
    , answer_2: Number
    , answer_4: Number
    , comments: String
    , other_comments: String
    , confidence: Number
    , window_w: Number
    , window_h: Number
    , mouse_moves: {
        count: Number
      , time: [Number]
      , x: [Number]
      , y: [Number]
    }
    , mouse_click: {
        count: Number
      , time: [Number]
      , x: [Number]
      , y: [Number]
      , id: [String]
    }
    , keydown_event: {
        count: Number
      , time: [Number]
      , x: [String]
      , y: [String]
      , id: [String]
    }
    , scroll_event: {
        count: Number
      , time: [Number]
      , x: [Number]
      , y: [Number]
    }
    , reseize: {
        count: Number
      , time: [Number]
      , x: [Number]
      , y: [Number]
    }
    , focusin: {
        count: Number
      , time: [Number]
      , id: [String]
    }
    , focusout: {
        count: Number
      , time: [Number]
      , id: [String]
    } 
    , mousewheel: {
        count: Number
      , time: [Number]
    }
  });

 recordSchema.statics.fieldMeta = function () {
    return [{"id":"id", "name":"ID", "dtype": "uint32"}, 
            {"id":"user", "name":"User", "dtype": "uint32"}, 
            {"id":"condition", "name":"Condition", "dtype": "uint8"}, 
            {"id":"time", "name":"Time", "dtype": "float64"}, 
            {"id":"question_id", "name":"Time", "dtype": "uint16"},
            {"id":"answer_1", "name":"a1", "dtype": "int32"},
            {"id":"answer_2", "name":"a2", "dtype": "int32"}, 
            {"id":"answer_4", "name":"a4", "dtype": "float32"}, 
            {"id":"comments", "name":"comments", "dtype": "string"}, 
            {"id":"other_comments", "name":"commentss", "dtype": "string"}, 
            {"id":"window_w", "name":"Window W", "dtype": "int32"},
            {"id":"window_h", "name":"Window H", "dtype": "int32"}, 
            {"id":"mouse_movesY", 
             "name":"Y Moves", 
             "color": "#1f77b4", 
             "dtype": "timeseries", 
             "display-dtype": "int32",
             "time-dtype": "int32",
             "time-scale": "ms",
             "series-dtype": "int32",
             "series-type": "continuous",
             "filter":"interp"},
            {"id":"mouse_movesX", 
             "name":"X Moves", 
             "color": "#aec7e8",
             "dtype": "timeseries", 
             "display-dtype": "int32",
             "time-dtype": "int32",
             "time-scale": "ms",
             "series-dtype": "int32",
             "series-type": "continuous",
             "filter":"interp"},
            {"id":"mouse_click_d", 
             "name":"Click", 
             "color": "#ff7f0e",  
             "dtype": "timeseries", 
             "display-dtype": "int32",
             "time-dtype": "int32",
             "time-scale": "ms",
             "series-dtype": "int32",
              "series-type": "event-simple",
             "filter":"hist"},
            {"id":"keydown_event_d", 
             "name":"Keydown", 
             "color": "#ffbb78",  
             "dtype": "timeseries", 
             "display-dtype": "int32",
             "time-dtype": "int32",
             "time-scale": "ms",
             "series-dtype": "int32",
              "series-type": "event-simple",
             "filter":"hist"},
            {"id":"scroll_event_d", 
             "name":"Scroll", 
             "color": "#2ca02c",  
             "dtype": "timeseries", 
             "display-dtype": "int32",
             "time-dtype": "int32",
             "time-scale": "ms",
             "series-dtype": "int32",
              "series-type": "event-simple",
             "filter":"hist"},
            {"id":"focusin_d", 
             "name":"Focus", 
             "color": "#98df8a",  
             "dtype": "timeseries", 
             "display-dtype": "int32",
             "time-dtype": "int32",
             "time-scale": "ms",
             "series-dtype": "int32",
              "series-type": "event-simple",
             "filter":"hist"},
             {"id":"focusout_d", 
             "name":"Blur", 
             "color": "#d62728",  
             "dtype": "timeseries", 
             "display-dtype": "int32",
             "time-dtype": "int32",
             "time-scale": "ms",
             "series-dtype": "int32",
              "series-type": "event-simple",
             "filter":"hist"},
             {"id":"mousewheel_d", 
             "name":"Mousewheel", 
             "color": "#ff9896",  
             "dtype": "timeseries", 
             "display-dtype": "int32",
             "time-dtype": "int32",
             "time-scale": "ms",
             "series-dtype": "int32",
              "series-type": "event-simple",
             "filter":"hist"}
           ];
  };

  recordSchema.virtual('mouse_movesY').get(function () {
     return this.mouse_moves.time.length; 
  });
  recordSchema.virtual('mouse_movesY_series').get(function () {
    return this.mouse_moves.y;
  });
  recordSchema.virtual('mouse_movesY_time').get(function () {
    return this.mouse_moves.time;
  });

  recordSchema.virtual('mouse_movesX').get(function () {
     return this.mouse_moves.time.length; 
  });
  recordSchema.virtual('mouse_movesX_series').get(function () {
    return this.mouse_moves.x;
  });
  recordSchema.virtual('mouse_movesX_time').get(function () {
    return this.mouse_moves.time;
  });

  recordSchema.virtual('mouse_click_d').get(function () {
     return this.mouse_click.time.length; 
  });
  recordSchema.virtual('mouse_click_d_series').get(function () {
    return this.mouse_moves.time;
  });
  recordSchema.virtual('mouse_click_d_time').get(function () {
    return this.mouse_click.time;
  });

  recordSchema.virtual('keydown_event_d').get(function () {
     return this.keydown_event.time.length; 
  });
  recordSchema.virtual('keydown_event_d_series').get(function () {
    return this.keydown_event.time;
  });
  recordSchema.virtual('keydown_event_d_time').get(function () {
    return this.keydown_event.time;
  });

  recordSchema.virtual('scroll_event_d').get(function () {
     return this.scroll_event.time.length; 
  });
  recordSchema.virtual('scroll_event_d_series').get(function () {
    return this.scroll_event.time;
  });
  recordSchema.virtual('scroll_event_d_time').get(function () {
    return this.scroll_event.time;
  });

  recordSchema.virtual('focusin_d').get(function () {
     return this.focusin.time.length; 
  });
  recordSchema.virtual('focusin_d_series').get(function () {
    return this.focusin.time;
  });
  recordSchema.virtual('focusin_d_time').get(function () {
    return this.focusin.time;
  });

  recordSchema.virtual('focusout_d').get(function () {
     return this.focusout.time.length; 
  });
  recordSchema.virtual('focusout_d_series').get(function () {
    return this.focusout.time;
  });
  recordSchema.virtual('focusout_d_time').get(function () {
    return this.focusout.time;
  });

  recordSchema.virtual('mousewheel_d').get(function () {
     return this.mousewheel.time.length; 
  });
  recordSchema.virtual('mousewheel_d_series').get(function () {
    return this.mousewheel.time;
  });
  recordSchema.virtual('mousewheel_d_time').get(function () {
    return this.mousewheel.time;
  });

  var Record = mongoose.model("Record", recordSchema);

  return {schema: recordSchema, model: Record};
};