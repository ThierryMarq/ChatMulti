module.exports.iniciarChat = function(application, req, res){

    var dadosForm = req.body

    req.assert('apelido','Nome é obrigatorio').notEmpty()
    req.assert('apelido', 'Nome deve conter entre 3 e 15 caracteres').len(3, 15)    
    
    var erros = req.validationErrors()

    if(erros){
        res.render("index", {validacao : erros})
        return
    }

    application.get('io').emit(
        'msgParaClientes',
        'Teste'
    )

    res.render("chat")
}