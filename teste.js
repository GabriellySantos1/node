var http = require('http');
var n = require('./primeiromodulo');
var dia = require('./moduloData');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<b> Aula de Node.js </b> <br>');
    res.write('<i>Prof. <i>');
    res.write(n.nome()+'<br>');
    //res.write(Date());
    res.end('Bom dia!');
}).listen(2000);