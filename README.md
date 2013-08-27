# find-testers-cli

Find testers by country and device command line tool

[![Package info](https://nodei.co/npm/find-testers-cli.png?downloads=true)](https://nodei.co/npm/find-testers-cli.png?downloads=true)

## install and run

Requires [nodejs](http://nodejs.org/).

    npm install // installs 3rd party modules
    node index.js
    // answer prompts and see matching testers

## Command line options

The application can read parameters from the command line

    node index.js --country us
    // will prompt for devices

    node index.js --country us,jp --device "iPhone 4,htc one"
    // will display testers in two countries

Note the lack of spaces after the comma.