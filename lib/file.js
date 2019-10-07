'use strict';

const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

const event = require('./event');

const read = file => {
  try {
    event.emit('read', file);
    return readFile(file);
  } catch (err) {
    event.emit('error', err);
  }
}

const uppercase = data => {
  try {
    const result = data.toString().toUpperCase();
    event.emit('uppercase');
    return result;
  } catch (err) {
    event.emit('error', err);
  }
}

const write =(file, text) => {
  try {
    event.emit('write', file);
    return writeFile(file,Buffer.from(text));
  } catch (err) {
    event.emit('error', err);
  }
}


module.exports = read, uppercase, write;