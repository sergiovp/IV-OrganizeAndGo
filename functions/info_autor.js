
exports.handler = async event => {
    var body = JSON.parse(event.body);
    var ChatID = body.message.chat.id;
    var mensajeChat = body.message.text;
    var respuesta;

    if (mensajeChat == "/start" || mensajeChat == "" || mensajeChat == "/help") {
        respuesta = "\ ¡Hola!, aquí podrás consultar toda la \
            información del autor de OrganizeAndGo.\n \
            · Para sonsultar toda la información: /info\n \
            · Para consultar el nombre: /nombre\n \
            · Para consultar el correo: /correo\n \
            · Para consultar el repositorio: /repo\n \
            · Para consultar el GitHub: /github";
    } else if (mensajeChat == "/info") {
        respuesta = "aa";

    } else if(mensajeChat == "/nombre") {
        respuesta = "Sergio Vela";

    } else if (mensajeChat == "/correo") {
        respuesta = "sergiovp96@gmail.com";

    } else if (mensajeChat == "/repo") {
        respuesta = "https://github.com/sergiovp/IV-OrganizeAndGo";
    
    } else if (mensajeChat == "/github") {
        respuesta = "https://github.com/sergiovp";
    
    } else {
        respuesta = "No conozco ese comando :( ¿Necesitas ayuda? Teclee /help";
    }

    return {
        statusCode: 200,
        body: JSON.stringify({text: respuesta, method:'sendMessage', chat_id: ChatID}),
        headers:{
            'Content-Type': 'application/json'
        }
    }
}
