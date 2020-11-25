
exports.handler = async event => {
    var body = JSON.parse(event.body);

    if(body.message != undefined){
      var id_chat = body.message.chat.id; //id que identifica el chat
      var mensaje = body.message.text; //aquello que escribe el usuario
      var respuesta;
  
  
      // ahora tenemos que ver las diferentes opciones que puede introducir el usuario
  
      if(mensaje == "/start"){
        respuesta = "¡Bienvenido!";
      }else if(mensaje == "/nombre"){
        respuesta = "Sergio";
      }else if(mensaje=='/email'){
        respuesta = "sergiovp@gmail.com";
      }else if(mensaje == "/help"){
        respuesta = "te ayudo";
      }else{
        respuesta = "Los comandos disponibles son: /start, /help, /listadovocab, /buscar <palabra>, /cambiarsig <palabra - significadoNuevo>, /clasificar <letra>, /listadoexpresiones, /listadofrases"
      }
  
      return {
        statusCode: 200,
        body: JSON.stringify({text:respuesta, method:'sendMessage', chat_id:id_chat}),
        headers:{
            'Content-Type': 'application/json'
          }
      }
    }else{
      respuesta = " ";
      return{
        statusCode: 200,
        body: respuesta.toString()
      }
    }
  
  }