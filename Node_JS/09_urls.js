var http = require('http');
var url = require("url")



http.createServer(function(req,res){
res.writeHead(200,{'content-type': 'text/html'});
console.log("before",req.url);
var q = url.parse(req.url,true).query;
console.log("after",req.url);
console.log("q",q);
var txt = q.year + " " + q.month;
if(req.url == '/?year=5&month=6'){
    res.writeHead(200,{'content-type': 'text/html'});
    res.write('<html><body><p>hello world<p></body></html>');
    res.end()
}
else{
    res.end(txt);
}
  
}).listen(3000);