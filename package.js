Package.describe({
  name: 'xinranxiao:react-canvas',
  summary: 'Meteor package for react-canvas - High performance <canvas> rendering for React components.',
  version: '1.0.0',
  git: 'https://github.com/xinranxiao/meteor-react-canvas'
});

Npm.depends({
  'react-canvas': '1.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use('react');
  api.use(['cosmos:browserify@0.9.2'], 'client');
  api.addFiles(['lib/react_canvas.browserify.js'], 'client');
  api.export('ReactCanvas', 'client');
});
