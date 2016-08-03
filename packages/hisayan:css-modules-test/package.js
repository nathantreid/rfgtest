Package.describe({
  name: 'hisayan:css-modules-test',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  react: '15.2.0',
  classnames: '2.2.5',
  flexboxgrid: '6.3.0',
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');
  api.addFiles('./.npm/package/node_modules/flexboxgrid/dist/flexboxgrid.css', 'client');
  api.use('nathantreid:css-modules', 'client');
  api.use('ecmascript', "client");
  api.mainModule('main.js', "client");
});
