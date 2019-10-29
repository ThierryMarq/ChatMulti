/* importar as configurações do servidor */
var app = require('./config/server')

/* parametrizar porta de escuta */
var server = app.listen(80, function () {
    console.log('Servidor online')
})

var io = require('socket.io').listen(server)

app.set('io', io)

io.on('connection', function (socket) {
    console.log("Usuario conectou")

    socket.on('disconnect', function () {
        console.log('Usuario desconectou')
    })

    socket.on('msgParaServidor', function (data) {
        socket.emit('msgParaClientes',
            { apelido: data.apelido, mensagem: data.mensagem }
        )

        if (parseInt(apelidoAtt) == 0) {

            socket.broadcast.emit('participantesParaCliente',
                { apelido: data.apelido }
            )

            socket.emit('participantesParaCliente',
                { apelido: data.apelido }
            )
        }
        
    })

})