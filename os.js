//access os module
const os = require('os');

//access memory 
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log("total Memoey : " + totalMemory + "  free Memory: " + freeMemory)
