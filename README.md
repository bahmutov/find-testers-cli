# find-testers-cli

Find testers by country and device command line tool

[![Build Status](https://travis-ci.org/bahmutov/find-testers-cli.png)](https://travis-ci.org/bahmutov/find-testers-cli)

[![Package info](https://nodei.co/npm/find-testers-cli.png?downloads=true)](https://nodei.co/npm/find-testers-cli.png?downloads=true)

## installation

Requires [nodejs](http://nodejs.org/) and git.

    git clone https://github.com/bahmutov/find-testers-cli.git
    cd find-testers-cli
    npm install

## Use

    node index.js
    // answer prompts and see matching testers

### Command line options

The application can read parameters from the command line

    node index.js --country us
    // will prompt for devices

    node index.js --country us,jp --device "iPhone 4,htc one"
    // will display testers in two countries

Note the lack of spaces after the comma.

## Small print

Author: Gleb Bahmutov <gleb.bahmutov@gmail.com>
License: MIT
Copyright &copy; 2013 Gleb Bahmutov
