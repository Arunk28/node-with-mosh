const EventEmitter = require('events');
const e = new EventEmitter();

//register
e.on('m',(arg) => {
    console.log('called listenerr ', arg);
})

//raise it
e.emit('m',{id:10,url:"https;//"});

//class integration for emitter

const emitEvent = require('./eventLogger');
const logger = new emitEvent();
//register
logger.on('m',(arg)=>{
  console.log('Listner',arg);
})
//raise
logger.log("Messsage");
