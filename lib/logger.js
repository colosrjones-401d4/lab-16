'use strict';


const event = require('./event.js');

event.on('err', payload => doLog('err', payload));
event.on('success', payload => doLog('success', payload));


/**
 *doLog sends an uppercase message of the action, along with the payload to console
 *
 * @param {*} action
 * @param {*} payload
 */
function doLog(action, payload){
    let message = `${action.toUpperCase()}`;
    console.log(message, payload);
  };
