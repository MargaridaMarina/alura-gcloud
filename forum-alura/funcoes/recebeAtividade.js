const pubsub = require('./pubSub')

//exportar funcao que vai processar o endpoint http
module.exports = async function recebeAtividade (requisicao, resposta) {
    //adicionar validacoes para enviar uma mensagem na hora da requisicao quando algum campo tiver errado ou faltandoconst resultado = await pubsub(atividade, 'atividades')
    const atividade = requisicao.body
    if (atividade.hasOwnProperty('data_criacao_atividade') === false) {
        resposta.send('O campo data_criacao_atividade não foi enviado')
        return
    }

    const tiposDeAtividade = ['criar-pergunta', 'responder-pergunta']
    if (tiposDeAtividade.indexOf(atividade.tipo_de_atividade) === -1) {
        resposta.send('O campo tipo_de_atividade está inválido ou não foi informado')
        return
    }

    if (atividade.hasOwnProperty('nome_do_curso') === false) {
        resposta.send('O campo nome_do_curso não foi informado')
        return
    }

    if (atividade.hasOwnProperty('nome_da_aula') === false) {
        resposta.send('O campo nome_da_aula não foi informado')
        return
    }

    if (atividade.hasOwnProperty('texto') === false) {
        resposta.send('O campo texto não foi informado')
        return
    }

    if (atividade.texto.length > 255) {
        resposta.send('O campo texto é maior que 255 caracteres')
        return
    }

    const resultado = await pubsub(atividade, 'atividades')
    console.log(atividade)
    resposta.send(resultado) //recebe qualquer valor em javascript e retorna como string em formato JSON
}

