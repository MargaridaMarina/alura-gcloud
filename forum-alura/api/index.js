const Koa = require('koa') //lib que facilita criacao de apis dentro do nodejs //chamando classe do Koa
const aplicacao = new Koa() //instanciando classe do Koa

aplicacao.use(function(contexto){ //gerenciando requisicao dentro da api //contexto é o objeto que contem requisição e resposta
    contexto.status = 200
    contexto.body = {
        mensagem: 'A API está funcionando!'
    }
})

aplicacao.listen(3000)
console.log('A API está funcionando normalmente')