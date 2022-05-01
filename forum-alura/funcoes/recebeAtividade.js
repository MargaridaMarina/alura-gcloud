//exportar funcao que vai processar o endpoint http
module.exports = async function recebeAtividade (requisicao, resposta) {
    console.log(requisicao.body)
    resposta.send(JSON.stringify(requisicao.bodya)) //recebe qualquer valor em javascript e retorna como string em formato JSON
}

