/*
 * akamai-analytics
 * https://github.com/sadwickr/videojs-akamai-analytics
 *
 * Copyright (c) 2013 Ryan Sadwick
 * Licensed under the MIT license.
 */

(function(vjs) {

  var
    /**
     * Copies properties from one or more objects onto an original.
     */
    extend = function(obj /*, arg1, arg2, ... */) {
      var arg, i, k;
      for (i = 1; i < arguments.length; i++) {
        arg = arguments[i];
        for (k in arg) {
          if (arg.hasOwnProperty(k)) {
            obj[k] = arg[k];
          }
        }
      }
      return obj;
    },

  // settings: config path to beacon xml
    defaults = {
      config: ""
    },

    // plugin initializer
    akamaiAnalytics = function(options) {
      var
        player = this,
        settings = extend({}, defaults, options || {});

      player.akamaiAnalytics = {
        getConfigPath: function(){
            if(settings.config)
            {
                return settings.config;
            }
            throw {
                name:        "Akamai Settings Error",
                level:       "Akamai events will not be tracked",
                message:     "Missing Akamai Settings file.",
                htmlMessage: "Please set the Akamai Settings file in order to fire off SOLA analytics",
                toString:    function(){return this.name + ": " + this.message}
            }
            return false;
        }
      };
        //Initializing Configuration XML for akamai (requires variable for sola)
        AKAMAI_MEDIA_ANALYTICS_CONFIG_FILE_PATH = player.akamaiAnalytics.getConfigPath();
        player.on("loadedmetadata", function(e){
            //Handling Custom Data calls on your own:
            akaPlugin.setData("title", "Testing-Title");
            akaPlugin.setData("playerId", "videojs");
            akaPlugin.setData('viewerId', 'SampleViewer');
            //Initiating Session:
            akaPlugin.handleSessionInit();
        });

        player.on("play", function(){
           akaPlugin.handlePlaying();
        });

        player.on("pause", function(){
            akaPlugin.handlePause();
        });

        player.on("ended", function(){
            akaPlugin.handlePlayEnd("Play.End.Detected");
        });

        player.on("error", function(){
            akaPlugin.handleError("VideoJS.Error");
        });

        //Defining the callback that will be passed to akaPlugin object.
        var akaPluginCallBack = {};
        //Setting callback function for stream head position
        akaPluginCallBack['streamHeadPosition'] = player.currentTime();
        //Setting callback function for stream length
        akaPluginCallBack['streamLength'] = player.duration;
        //Setting callback function for stream url
        akaPluginCallBack['streamURL'] = player.currentSrc();
        //Creating Library Instance
        var akaPlugin = new AkaHTML5MediaAnalytics(akaPluginCallBack);
    };
  
  // register the plugin with video.js
  vjs.plugin('akamaiAnalytics', akamaiAnalytics);

}(window.videojs));