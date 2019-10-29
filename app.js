/* importar as configurações do servidor */
var app = require('./config/server')

/* parametrizar porta de escuta */
var server = app.listen(80, function(){
    console.log('Servidor online')
})

var io = require('socket.io').listen(server)

io.on('connection', function(socket){
    console.log("Usuario conectou")

    socket.on('disconnect', function(){
        console.log('Usuario desconectou')
    })
    
})