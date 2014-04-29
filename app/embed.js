//<script async src="http://127.0.0.1:9000/embed.js"></script>

//BAsed on http://shootitlive.com/2012/07/developing-an-embeddable-javascript-widget/
(function(global) {

  function async(url, before, callback) {
    var script = document.createElement('script');
    script.src = '//' + url;
    if (callback) { script.addEventListener('load', function (e) { callback(null, e); }, false); }
    before.parentNode.insertBefore(script, before);
  }

  var els = document.getElementsByTagName('script');
  var re = /.*embed.js/;
  var foundEls = [];
  for(var i = 0; i < els.length; i++) {
    var el = els[i];

    if(el.src.match(re) && foundEls.indexOf(el) < 0) {

      foundEls.push(el);
      console.log('Identified embed tag %o', el);

      var iframe = document.createElement('iframe');
      iframe.src = "http://127.0.0.1:9000";
      iframe.width="100%";
      iframe.scrolling="no";
      iframe.className ="cm-widget";
      iframe.frameBorder = "0";
      iframe.style.backgroundColor = "transparent";
      iframe.allowTransparency="true";

      el.parentNode.insertBefore(iframe, el);

      async('raw2.github.com/davidjbradshaw/iframe-resizer/master/js/iframeResizer.min.js',
        el,
        function(){
          iFrameResize({bodyMargin: "0px 0px 200px 0px", log: true},'iframe.cm-widget');
        }
      );
    }
  }
}());
