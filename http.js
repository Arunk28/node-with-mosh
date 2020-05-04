//http module required to perform api operations
const http = require('http');

//server create and perform api 
const  server =http.createServer(function(req,res){
    if(req.url === '/')
    {
        res.write("Hello world");
        res.end();
    }
    if(req.url === '/api/courses')
    {
        res.write(JSON.stringify([1,2,3,4,5]));
        res.end();
    }
});
//call the connection is establish
server.on('connection',(socket)=>{
    console.log("new  Connection");
});

server.listen(5000);
console.log("listen 5000");