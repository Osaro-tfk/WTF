var filestream = require('fs');
var http = require('http');
   
async function read(){
       
    let files = await filestream.promises.readFile('./pages/textfile.txt','utf8')
    console.log(files)
    }
    
read()

console.log('read')