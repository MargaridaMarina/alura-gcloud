const pubsub = require('./pubsub')

//exportar funcao que vai processar o endpoint http
module.exports = async function recebeAtividade (requisicao, resposta) {
    const resultado = await pubsub(requisicao.body, 'atividades')
    console.log(requisicao.body)
    resposta.send(resultado) //recebe qualquer valor em javascript e retorna como string em formato JSON
}

