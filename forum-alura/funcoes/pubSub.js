const PubSub = require("@google-cloud/pubsub").PubSub //chamando classe PubSub
const instancia = new PubSub()//criando instancia da classe PubSub

//exportar função que recebe os dados que vão para o pubsub e que valide esses dados e publique dentro do pubsub
module.exports = function pubsub(dados, topico) {//args como parametro as infos que vao pro pubsub e o topico
    if(typeof dados !== 'string') {//pubsub so aceita msgs em formato base64 
        dados = JSON.stringify(dados) 
    }   
    dados = Buffer.from(dados)
    return instancia.topic(topico).publish(dados)
}