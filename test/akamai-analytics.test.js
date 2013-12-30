(function(vjs) {

  var isHtmlSupported;

  module('videojs.akamaiAnalytics', {
    // This will run before each test in this module.
    setup: function() {
      // grab a reference to the video
      var video = document.querySelector('#qunit-fixture video');
      isHtmlSupported = videojs.Html5.isSupported;

      if (/phantomjs/gi.test(window.navigator.userAgent)) {
        // PhantomJS doesn't have a video element implementation
        // force support here so that the HTML5 tech is still used during
        // command-line test runs
        videojs.Html5.isSupported = function() {
          return true;
        };

        // provide implementations for any video element functions that are
        // used in the tests
        video.load = function() {};
      }

      this.player = vjs(video);
    },

    teardown: function() {
      // restore the original html5 support test
      videojs.Html5.isSupported = isHtmlSupported;
    }
  });

  test('is registered', function() {
    expect(1);
    ok(this.player.akamaiAnalytics, 'the akamai-analytics plugin is present');
  });

  test('has akamai config path', function(){
     expect(1);
     this.player.akamaiAnalytics({
         config: "path_to_akamai_config.xml"
     });
     strictEqual(this.player.akamaiAnalytics.getConfigPath().length > 0, true, "The config path has some value in it" )
  });

}(window.videojs));
