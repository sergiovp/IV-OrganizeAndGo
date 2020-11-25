
exports.handler = async event => {
    var contenido = JSON.parse(event.postData.contents);

    if(contenido.message != undefined){
        var ChatID = contenido.message.chat.id;
        var mensajeChat = contenido.message.text;
        var respuesta;

        if (mensajeChat == "/start") {
            respuesta = "¡Hola!, aquí podrás consultar toda la información del autor de OrganizeAndGo.";

        } else if(mensajeChat == "/autor") {
            respuesta = "Sergio Vela";

        } else if (mensajeChat == "/help") {
            respuesta = "Mensaje de ayuda";
        }
        else {
            respuesta = "Escribe /start";
        }

        return {
        statusCode: 200,
        body: JSON.stringify({text: respuesta, method:'sendMessage', chat_id: ChatID}),
        headers:{
            'Content-Type': 'application/json'
            }
        }
    }
    else {
        respuesta = "Hola";
        
        return {
            statusCode: 200,
            body: respuesta.toString()
        }
    }
}