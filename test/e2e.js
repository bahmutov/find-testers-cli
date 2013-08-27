gt.module('end 2 end tests');

var path = require('path');
var index = path.join(__dirname, '../index.js');

gt.async('one country, any device', function () {
  var args = ['--country', 'us', '--device', 'ALL'];
  gt.exec('node', [index].concat(args), 0, 'should be ok');
});

gt.async('two countries, any device', function () {
  var args = ['--country', 'us,jp', '--device', 'ALL'];
  gt.exec('node', [index].concat(args), 0, 'should be ok');
});