var events = require('events');

//createAn EventEmitter Obj
var eventEmitter = new events.EventEmitter();

//create ab event handler

var connecthandler = function conntected() {
    console.log('connection successful.')

    // shot the data_receive event
    eventEmitter.emit('data_received');

}

//Bind the connection event with the handler
eventEmitter.on('data_recieved', function () {
    console.log('data received succesfully.');
})

//fire theh connection event 
eventEmitter.emit('connection');
conntected()

console.log('PROGRAM ENDED');