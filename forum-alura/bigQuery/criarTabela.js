const BigQuery = require('@google-cloud/bigquery').BigQuery //comunicando-se com a api do bigquery
const instancia = new BigQuery() //instanciando classe

async function criarTabela(){ //criando tabela que vai representar as atividades
    const dataset = instancia.dataset('forumAlura') //filtrando tabela que ja existem no dataset //criando instancia do dataset
    const [tabelas] = await dataset.getTables() //fazendo requisicao para api do bigquery //desconstruindo variavel
    const nomeTabela = 'atividades'
    const tabelasEncontradas = tabelas.filter(function (tabelaAtual) {
        return tabelaAtual.id === nomeTabela
    })
    if (tabelasEncontradas.length > 0) {
        console.log('Essa tabela já existe!')
        return
    }
    const estrutura = [
        {
            name: 'data_criacao_atividade',
            type: 'timestamp',
            mode: 'required'
        },
        {
            name: 'tipo_de_atividade',
            type: 'string',
            mode: 'required'
        },
        {
            name: 'nome_do_curso',
            type: 'string',
            mode: 'required'  
        },
        {
            name: 'nome_da_aula',
            type: 'string',
            mode: 'required'
        },
        {
            name: 'texto',
            type: 'string',
            mode: 'required'
        },
        {
            name: 'id_atividade_principal',
            type: 'integer',
            mode: 'nullable'
        }
    ]

    await dataset.createTable(nomeTabela, {schema: estrutura}) 
    console.log('A tabela foi criada com sucesso!')
}

criarTabela()