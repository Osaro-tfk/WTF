var http = require('http');
var port = 3100;
var fellows = require('./pages/fellowsrecord.js');
var progress = require('./pages/progress.js');
var remains = require('./pages/remains.js');
http.createServer(function(request,response){
    if(request.url == '/155'){
        response.writeHead(200,{'Content-Type':'application/json'})
        response.write(JSON.stringify(fellows.fellow()))
        response.end()
    }
    else if(request.url == '/156'){
        response.writeHead(200,{'Content-Type':'text/plain'})
        response.write(progress.progress())
        response.end()
    }
    // else if(request.url == '/160'){
    //     response.writeHead(200,{'Content-Type':'application/json'})
    //     response.write(JSON.stringify(remains.toCover()))
    //     response.end()
    // }
}).listen(port)