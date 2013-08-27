var find = require('find-testers');
var prompt = require('prompt');
var Table = require('easy-table');
var check = require('check-types');

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
  printTesters(testers);
});

function printTesters(testers) {
  check.verifyArray(testers, 'expected list of testers');
  console.log('found', testers.length, 'testers', '\n');
  if (!testers.length) {
    return;
  }

  var table = new Table();
  testers.forEach(function (tester) {
    table.cell('id', tester.testerId);
    table.cell('first', tester.firstName);
    table.cell('last', tester.lastName);
    table.cell('bugs found', tester.bugs);
    table.newRow();
  });
  console.log(table.toString());
}