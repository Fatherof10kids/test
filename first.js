  var fs = require('fs');
    var path = require('path');
    var newList=[];
module.exports = function(directoryName,fileExtension,printNewLines){
    var finished = function(err,list){
        if(err) return printNewLines(err,list);
    var extention= '.'+fileExtension;
    for(var i=0;i<list.length;i++){
    if(path.extname(list[i])==extention){
            newList.push(list[i]);
        }
        }
        printNewLines(err,newList);
    }
    fs.readdir(directoryName,finished);
}