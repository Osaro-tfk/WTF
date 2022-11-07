var app = require('./pages/simapps.js');
var data = require('./datasource.js');
var http = require('http');
var port = 3500
var filestream = require('fs')

// read external files to the browser

http.createServer(function(request, response){
    if(request.url=='/'){
        filestream.readFile('index.html', 'utf-8', (err,data)=>{
            if(err){
               console.log(err) 
            }else{
                response.write(data)
                response.end()
            }
            
        })
    }else if(request.url == '/111'){
        filestream.readFile('database.json', 'utf-8', (err, data)=>{
            if(err)
            {
                console.log(err)
            }else{
                let pData = JSON.parse(data)
                pData.forEach(fellow=>{
                    console.log(fellow.fellowName)
                });
            }
            // response.writeHead(200,{"Content-type":"application/json"})
            // response.write(data)
            // response.end()
        })
    }
    

}).listen(port)