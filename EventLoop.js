
// Import event module
var events = require('events');

// Create eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
	console.log("Connection successful.");
	
	// Fire the data_received event
	eventEmitter.emit('data_received');	
}

// Create a 2nd event handler as follows
var connectHandler2 = function connnected() {
	console.log("Connect successful for event hander #2");

	// Fire the data obtained event
	eventEmitter.emit('data_sendback');
}


// Bind event and event handler as follows
eventEmitter.on('connection', connectHandler);
eventEmitter.on('connection2', connectHandler2);

//Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
	console.log("data received successfully.");
});
//Bind the data_received event with the anonymous function
eventEmitter.on('data_sendback', function(){
	console.log("data sent back successfully.");
});



// Fire event
eventEmitter.emit('connection2');
eventEmitter.emit('connection');

console.log("Program Ended.");





