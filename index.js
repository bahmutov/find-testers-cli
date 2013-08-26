var find = require('find-testers');
var prompt = require('prompt');

prompt.start();

var inputs = [
  {
    name: 'country',
    description: 'Enter desired countries (comma-separated)',
    type: 'string',
    message: 'countries',
    default: 'ALL',
    required: true
  }
];

prompt.get(inputs, function (err, userValues) {
  var testers = find({
    country: userValues.country.split(',')
  });
  console.log('found', testers.length, 'testers:');
  console.dir(testers);
});