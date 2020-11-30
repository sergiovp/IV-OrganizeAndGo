const datos = require('./datos_autor.json');

exports.handler = async event => {
    var body = JSON.parse(event.body);
    var ChatID = body.message.chat.id;
    var mensajeChat = body.message.text;
    var respuesta;

    if (mensajeChat == "/start" || mensajeChat == "" || mensajeChat == "/help") {
        respuesta = "¡Hola!, aquí podrás consultar toda la \
            información del autor de OrganizeAndGo.\n \
            · Para consultar el nombre: /nombre\n \
            · Para consultar el correo: /correo\n \
            · Para consultar el repositorio: /repo\n \
            · Para consultar el GitHub: /github";

    } else if(mensajeChat == "/nombre") {
        respuesta = datos.informacionautor.autorapp;

    } else if (mensajeChat == "/correo") {
        respuesta = datos.informacionautor.contacto;

    } else if (mensajeChat == "/repo") {
        respuesta = datos.informacionautor.repositorio;
    
    } else if (mensajeChat == "/github") {
        respuesta = datos.informacionautor.github;
    
    } else if (mensajeChat == "/body") {
        respuesta = JSON.stringify(body);

    } else {
        respuesta = "No conozco ese comando :(\n ¿Necesitas ayuda? Teclee /help";
    }

    return {
        statusCode: 200,
        body: JSON.stringify({text: respuesta, method:'sendMessage', chat_id: ChatID}),
        headers:{
            'Content-Type': 'application/json'
        }
    }
}
