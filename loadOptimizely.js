insertOptimizely = function(number) {
  var head = document.getElementsByTagName('head')[0];

  //Generate a script tag
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '//cdn.optimizely.com/js/' + number + '.js';
  //inject
  head.appendChild(script);

};