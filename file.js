//access file system
const fs = require('fs');

//read directory list
fs.readdir('./',function(err,files){
if(err)
{
    console.log(err);
}
else console.log(files);
})

//better to work sync only  for IO operation