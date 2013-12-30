/*! videojs-akamai-analytics - v0.1.0 - 2013-12-30
* Copyright (c) 2013 Ryan Sadwick; Licensed  */
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

    // define some reasonable defaults for this sweet plugin
    defaults = {
      awesome: true
    },

    // plugin initializer
    akamaiAnalytics = function(options) {
      var
        // save a reference to the player instance
        player = this,

        // merge options and defaults
        settings = extend({}, defaults, options || {});

      // replace the initializer with the plugin functionality
      player.akamaiAnalytics = {
        go: function() {
          if (settings.awesome) {
            return 'awesome.';
          }
          return ':(';
        },
        extreme: function() {
          return 'awesome!';
        }
      };
    };
  
  // register the plugin with video.js
  vjs.plugin('akamaiAnalytics', akamaiAnalytics);

}(window.videojs));
