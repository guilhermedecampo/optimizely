Package.describe({
  summary: "Load optimizely"
});

Package.on_use(function (api){
  api.add_files('loadOptimizely.js', 'client');
  api.export('insertOptimizely', 'client');
});