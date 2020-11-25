
exports.handler = async event => {
    var body = JSON.parse(event.body);

    //if(body.message != undefined){
        var ChatID = body.message.chat.id;
        var mensajeChat = body.message.text;
        var respuesta;

        if (mensajeChat == "/start") {
            respuesta = "¡Hola!, aquí podrás consultar toda la información del autor de OrganizeAndGo.";

        } else if(mensajeChat == "/autor") {
            respuesta = "Sergio Vela";

        } else if (mensajeChat == "/help") {
            respuesta = "Mensaje de ayuda";
        }
        /*else {
            respuesta = "Escribe /start";
        }*/

        return {
        statusCode: 200,
        body: JSON.stringify({text: respuesta, method:'sendMessage', chat_id: ChatID}),
        headers:{
            'Content-Type': 'application/json'
            }
        }
    //}
    /*else {
        respuesta = "Hola";
        
        return {
            statusCode: 200,
            body: respuesta.toString()
        }
    }*/
}