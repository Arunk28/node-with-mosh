const EventEmitter = require('events');
const event = new EventEmitter();
//logger class
class Logger extends EventEmitter{
    log(message){
       

        this.emit('m',{id:1,url : "https://"});
    }
}
//ecport the class object
module.exports = Logger;