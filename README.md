# VideoJS Akamai Analytics Plugin

Akamai Sola Analytics plugin for videojs

## Getting Started
Download [videojs](http://www.videojs.com/)

In your web page:

```html
<link rel="stylesheet" href="video-js.css">
<video id="video"
       class="video-js vjs-default-skin"
       src="movie.mp4"
       controls>
</video>
<script src="video.js"></script>
<script src="dist/videojs.akamai-analytics.min.js"></script>
<script>
// save a reference to the video element
  video = document.querySelector('video'),
  // save a reference to the video.js player for that element
  player = videojs(video);
  // initialize the plugin with some custom options:
  player.akamaiAnalytics({
    config: "http://ma399-r.analytics.edgesuite.net/config{{ your_beacon }}.xml?enableGenericAPI=1"
  });
</script>
```

## Documentation
* Setup your beacon xml with Akamai
* Enter your config xml within the config option on the plugin
* See the results by going Akamai's control panel -> Monitor - > Sola or Qos Monitor

## Examples
Check out example.html to see Akamai Analytics in action.  To see the results of the Analytics, you'll need to Akamai account.

## Release History
#####12/30/2013
* Created plugin
* Created tests
