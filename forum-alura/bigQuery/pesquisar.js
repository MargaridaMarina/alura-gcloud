const BigQuery = require('@google-cloud/bigquery').BigQuery
const instancia = new BigQuery()

module.exports = async function pesquisar(filtro){ //exportar funcao pra fazer requisicao e pesquisar os dados da tabela
    const opcoes = { 
        query: 'SELECT * FROM `celestial-sum-349101.forumAlura.atividades`'//instrucoes da pesquisa //com o * vamos pegar todas as colunas da tabela
    }

    if (filtro) { //interpolando variavel filtro com a propriedade query
        opcoes.query = `${opcoes.query} WHERE ${filtro}`
    }

    const tabela = instancia.dataset('forumAlura').table('atividades')
    const [trabalho] = await tabela.createQueryJob(opcoes)
    const [resultados] = await trabalho.getQueryResults()
    return resultados
}