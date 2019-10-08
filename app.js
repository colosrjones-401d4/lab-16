'use strict';


// emit is what boroadcast in app or index

const fs = require('fs');
const event = require('./event.js');
require('./logger.js');



/**
 *alterFile is function that reads and writes to a file
 *
 * @param {*} file
 */
const /**
 *
 *uses fs to read file, takes data converts to string and then uppercases string
 * @param {*} err
 * @param {*} data
 */
alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { event.emit('err', err); };
    let text = data.toString().toUpperCase();

    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { event.emit('err', err); };
      
      event.emit('success', `${file} was saved successfully!`)
      
    });
  });
};


// gets argv slices first two elements and shift returns file out of array
let file = process.argv.slice(2).shift();