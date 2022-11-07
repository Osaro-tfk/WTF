// var smp = require ('./source.js')
// var sm = new smp.SampleClass()
// smp.callFunction()

// http url fs path util
// http module: you use this to make node work like a web server

// you can create, use an in-built or install a module

// var http = require('http')
// http.createServer(function(request,response){
//     response.write("<h1>server started...<button>Click Me</button></h1>")
//     response.end()
// }).listen(3004)

// 18/10/22
// url
// getting response based on request
var http = require('http');
var app = require('./pages/simapps.js');
var data = require('./datasource.js');
var port = 3004;
var fsm = require('./fsm.js')

http.createServer(function(request,response){
    // if (request.url == '/womenintech') {
    //     response.write('<initialed node server !!!!!>')} 
    //     else if(request.url == '/backend/programming'){
    //         response.write('<h1>Backend Development</h1>')
    //     }
      if (request.url == '/178') {
          response.writeHead(200,{'Content-Type':'text/plain'})
          response.write(app.MomoApp())
          response.end()
          
      }  else if(request.url == '/124'){
          response.writeHead(200,{'Content-Type':'text/plain'})
          response.write(app.checkAirtime())
          response.end()
      }  else if(request.url == '/128'){
        response.writeHead(200,{'Content-Type':'application/json'})
        response.write(JSON.stringify(data.recs()))
        response.end()
    }   else if(request.url == "/135"){
        response.writeHead(200,{'Content-Type':'text/html'})
        response.write(fsm.read())
        // response.write(JSON.stringify(data.recs()))
        response.end()
    }
    
    }).listen(port)
    