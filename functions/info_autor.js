const informacion = require('./datos_autor.json');

exports.handler = async function(req, res) {
    if(req.body != undefined) {
        var text = req.body.message.text;
        var mostrar = "";
        var chatID = req.body.message.chat.id

        if(text == "/nombre") {
            mostrar = "Sergio\n";
        } else {
            mostrar = "Puedes consultar...\n"
        }

        var objetoJSON ={text : mostrar, method : "sendMessage", chat_id : chatID}
        res.setHeader("Content-Type","application/json");
        res.status(200).json(objetoJSON);

    } else {
        res.status(200).send("Hola");
    }

    /*return {
        statusCode: 200,
        body: JSON.stringify(informacion)
    };*/
}
