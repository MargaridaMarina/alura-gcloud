const BigQuery = require('@google-cloud/bigquery').BigQuery //chamando classe BigQuery
const instancia = new BigQuery() //criando instancia da classe BigQuery

async function criarDataset(){
    //Listando datasets que ja existem 
    //Todo método do big query sempre retorna um array contendo outro array com os resultados
    //Vamos desestruturar o array que vai estar retornando e o primeiro item dele vai ser a listagem de datasets
    const [datasets] = await instancia.getDatasets() 
    const nomeDataset = 'forumAlura' //filtrando array para saber se dataset já existe
    const datasetsFiltrados = datasets.filter(function(datasetAtual){
        return datasetAtual.id = nomeDataset 
    })
    if (datasetsFiltrados.length > 0) {
        console.log("Esse dataset já foi criado!")
        return
    }
    await instancia.createDataset(nomeDataset)
    console.log('Dataset foi criado com sucesso!')
}

criarDataset()