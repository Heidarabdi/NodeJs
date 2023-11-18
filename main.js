// examples of node.js global objects

// __dirname - path to current directory

console.log(__dirname);

// __filename - file name

console.log(__filename);

// Console - console.log

console.log('Hello World');

// process - info about env where the program is being executed

// console.log(process);

// Buffer - temp storage for binary data

const buf = Buffer.from('Hi');
console.log(buf);

// setImmediate - executes setImmediate callback after I/O events callbacks

setImmediate(() => {
    console.log('Hello World');
});

// setInterval - executes a callback repeatedly after a given delay
let num = 1;
// setInterval(() => {
//     console.log(num++);
//
// }, 1000);

// setTimeout - executes a callback after a given delay

setTimeout(() => {
    console.log('Hello World');
}, 1000);

// clearImmediate - clears setImmediate

// clearInterval - clears setInterval
// give example of clearInterval


// clearTimeout - clears setTimeout


const event = require('events');

const emitter = new event.EventEmitter();

const event1 = () => console.log('event 1 has occurred');

const event2 = () => console.log('event 2 has occurred');

emitter.addListener('connection', event1);

emitter.on('connection', event2);



