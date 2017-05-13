/*
//http server
const http = require('http');
const fs = require("fs");
var fileDir = process.argv[3];

var fileStream = fs.createReadStream(fileDir);

var server = http.createServer((req,res)=>{
    fileStream.pipe(res);
});
server.listen(process.argv[2]);
*/
/*const net = require("net");
var date = new Date();

var addZero = function(num){
    if(num<10){
        return '0'+num;
    }
    return num;
}

var server = net.createServer(function(socket){
    var day = addZero(date.getDate());
    var month = addZero(date.getMonth()+1);
    var hours = addZero(date.getHours());
    var min = addZero(date.getMinutes());
    var data = date.getFullYear()+"-"+ month +"-"+day+" "+hours+":"+min+'\n';
      socket.write(data);
      socket.end();
});
server.listen(process.argv[2]);*/

/*const http = require('http');
var str="";
http.get(process.argv[2],(response) =>{
    response.on('error',(e)=>{throw e;});
    response.setEncoding('utf-8');
    response.on('data',(data)=>{
        str += data;
    });
    response.on('end',()=>{
       console.log(str);
       str="";
       http.get(process.argv[3],(response) =>{
        response.on('error',(e)=>{throw e;});
        response.setEncoding('utf-8');
        response.on('data',(data)=>{
            str+=data;
    });
    response.on('end',()=>{
        console.log(str);
         str="";
            http.get(process.argv[4],(response) =>{
                response.on('error',(e)=>{throw e;});
                 response.setEncoding('utf-8');
                 response.on('data',(data)=>{
                 str+=data;
                 });
                 response.on('end',()=>{
                    console.log(str); 
                 });
            });
    });
});
    });
});

*/

/*const http = require('http');
var str="";
http.get(process.argv[2],function(response){
    response.setEncoding('utf-8');
    response.on('error',(e)=>{throw e;})
   response.on('data',function(data){
       str+=data;
   });
   response.on('end',function(){
       console.log(str.length);
       console.log(str);
   }).on('error',(error) => {throw error;
   });
});*/

/*const http = require("http");
http.get(process.argv[2],function(response){
   response.on('data',function(data){
      console.log(data.toString()); 
   });
});*/
// nice and smooth
/*var http = require('http')
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)*/