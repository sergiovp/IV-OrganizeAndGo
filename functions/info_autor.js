const informacion = require('./datos_autor.json');

exports.handler = async function(event, context) {
    let text = req.body.message.text;
    let mostrar = "";
    let chatID = req.body.message.chat.id

    if(text == "/nombre") {
        mostrar = "Sergio\n";
    } else {
        mostrar = "Puedes consultar...\n"
    }

    let objetoJSON ={ text : mostrar, method : "sendMessage", chat_id : chatID}
    res.setHeader("Content-Type","application/json");
    res.status(200).json(objetoJSON)

    /*return {
        statusCode: 200,
        body: JSON.stringify(informacion)
    };*/
}
