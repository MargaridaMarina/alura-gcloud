const inserir = require('../bigQuery/inserir')

//exportar funcao que vai processar os dados do topico pubsub
module.exports = async function insereAtividade (evento) { //funcao de background
    try {
        const atividadeCodificada = evento.data
        const json = Buffer.from(atividadeCodificada, 'base64').toString() 
        const atividade = JSON.parse(json) 

        const resultados = await inserir(atividade)
        console.log(resultados)
    } catch (erro) {
        console.error(erro)
        console.log(erro.response) //se for um erro do bigQuery podemos acessar o response
    }
}