'use strict';

const EventEmitter = require('events');

const eventHub = new EventEmitter();

eventHub.emit('testing', 'to see if it works');

console.log(eventHub);