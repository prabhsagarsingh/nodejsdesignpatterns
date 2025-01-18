const events = require('events');

function helloEvents() {
    const eventEmitter = new events.EventEmitter();
    setTimeout(()=>eventEmitter.emit("complete","hello world"), 100);
    return eventEmitter;
}

function helloCallback(cb) {
    setTimeout(()=> cb(null,"hello world from cb"),100)
}

helloEvents().on("complete", (message)=>console.log(message))

helloCallback((err,message)=> console.log(message));

