//path module access
const path = require('path');

//path obj and print it 
var pathObj = path.parse(__filename);

console.log(pathObj);