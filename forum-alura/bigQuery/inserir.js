const BigQuery = require('@google-cloud/bigquery').BigQuery
const instancia = new BigQuery()

//exportar funcao que vai inserir os dados no banco de dados
module.exports = function inserir (linhas) {
    const dataset = instancia.dataset('forumAlura') //para conseguir uma instância da nossa tabela a gente precisa de uma instância do data set
    const tabela = dataset.table('atividades') //pegar a tabela que está dentro do dataset
    return tabela.insert(linhas) //função que recebe as linhas ou a linha que vai ser inserida dentro da tabela
}