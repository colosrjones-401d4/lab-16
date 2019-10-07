'use strict';

const event = require('./event');

event.on('read', handleRead);
event.on('uppercase', handleUppercase);
event.on('write', handleWrite);
event.on('alter', handleAlter);
event.on('error', handleError);

function handleRead(payload) {
  console.log(`Read ${payload}`)
}
function handleUppercase(payload) {
  console.log(`Uppercase ${payload}`)
}
function handleWrite(payload) {
  console.log(`Write ${payload}`)
}
function handleAlter(payload) {
  console.log(`Alter ${payload}`)
}
function handleError(payload){
  console.log(`Error ${payload}`)
}

module.exports = {handleRead,handleUppercase,handleWrite,handleAlter,handleError}