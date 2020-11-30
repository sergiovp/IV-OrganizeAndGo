const datos = '{"informacionautor":{"autorapp":"Sergio Vela Pelegrina",' +
    '"contacto":"sergiovp96@gmail.com",' +
    '"repositorio":"https://github.com/sergiovp/IV-OrganizeAndGo",' +
    '"github":"https://github.com/sergiovp"}}';

exports.handler = async event => {
    var body = JSON.parse(event.body);
    var ChatID = body.message.chat.id;
    var mensajeChat = body.message.text;
    var respuesta;
    let obj_data = JSON.parse(datos);

    if (mensajeChat == "/start" || mensajeChat == "" || mensajeChat == "/help") {
        respuesta = "¡Hola!, aquí podrás consultar toda la \
            información del autor de OrganizeAndGo.\n \
            · Para consultar el nombre: /nombre\n \
            · Para consultar el correo: /correo\n \
            · Para consultar el repositorio: /repo\n \
            · Para consultar el GitHub: /github";

    } else if(mensajeChat == "/nombre") {
        respuesta = obj_data.informacionautor.autorapp;

    } else if (mensajeChat == "/correo") {
        respuesta = obj_data.informacionautor.contacto;

    } else if (mensajeChat == "/repo") {
        respuesta = obj_data.informacionautor.repositorio;
    
    } else if (mensajeChat == "/github") {
        respuesta = obj_data.informacionautor.github;
    
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
