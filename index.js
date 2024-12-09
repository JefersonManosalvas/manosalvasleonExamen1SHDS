var http =require('http');

var server=http.createServer();

function mensaje(req,resp){
    resp.writeHead(200,{'content-type':'text/plain'});
    resp.write("Manosalvas Jeferson, Estudiante de la carrera de desarrollo de software del instituto superior tecnologico 17 de julio");
    resp.end();
}
server.on('request',mensaje);
server.listen(3001,function(){
    console.log("la solicitud fue realizada mediante el puerto 3001");
})