const Koa = require('koa') //lib que facilita criacao de apis dentro do nodejs //chamando classe do Koa
const aplicacao = new Koa() //instanciando classe do Koa
const pesquisar = require('../bigQuery/pesquisar')

aplicacao.use(async function(contexto){ //gerenciando requisicao dentro da api //contexto é o objeto que contem requisição e resposta
    contexto.status = 200
    contexto.body = await pesquisar()
})

aplicacao.listen(3000)
console.log('A API está funcionando normalmente')