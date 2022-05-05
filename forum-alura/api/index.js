const Koa = require('koa') //lib que facilita criacao de apis dentro do nodejs //chamando classe do Koa
const conversor = require('basic-auth')
const processador = require('koa-bodyparser')
const aplicacao = new Koa() //instanciando classe do Koa
const pesquisar = require('../bigQuery/pesquisar')

aplicacao.use(processador())
aplicacao.use(async function(contexto){ //gerenciando requisicao dentro da api //contexto é o objeto que contem requisição e resposta
    const usuarioEsenha = conversor.parse(contexto.request.headers.authorization)
    console.log(usuarioEsenha)
    const USUARIO = process.env.USUARIO
    const SENHA = process.env.SENHA
    
    if(USUARIO !== usuarioEsenha.name || SENHA !== usuarioEsenha.pass) {
        contexto.body = {
            mensagem: 'Acesso negado!'
        }
        return
    }

    const corpoDaRequisicao = contexto.request.body
    contexto.status = 200
    contexto.body = await pesquisar(corpoDaRequisicao.filtro)
})

aplicacao.listen(3000)
console.log('A API está funcionando normalmente')