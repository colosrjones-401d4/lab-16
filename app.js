'use strict';

const fs = require('fs');
require('./lib/logger');
require('./lib/event')

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
      // Start here: replace log with emit/on
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);
