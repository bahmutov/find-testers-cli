var find = require('find-testers');
var prompt = require('prompt');

prompt.start();

var inputs = [
  {
    name: 'country',
    description: 'Enter desired countries (comma-separated)',
    type: 'string',
    default: 'ALL',
    required: true
  },
  {
    name: 'device',
    description: 'Enter devices (comma-separated)',
    type: 'string',
    default: 'ALL',
    required: true
  }
];

prompt.get(inputs, function (err, userValues) {
  var testers = find({
    country: userValues.country.split(','),
    device: userValues.device.split(',')
  });
  console.log('found', testers.length, 'testers:');
  console.dir(testers);
});