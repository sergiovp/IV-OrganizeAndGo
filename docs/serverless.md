## Uso de sistemas serverless

### Despliegue correcto y funcionando con documentación de la conexión entre el repositorio de GitHub y vercel para despliegue continuo

Como primer sistema serverless, he decidido utilizar [Vercel](https://vercel.com). Pude comprobar realizando los ejercicios relativos a este tema lo sencillo que es implementar una función serverless. Otra ventaja es que puedo usar el lenguaje de programación con el que estoy desarrollando el proyecto (TypeScript) sin ningún problema.

En Vercel nos podemos registrar con nuestra cuenta de GitHub, tras lo cual tan solo deberemos pulsar sobre "import project" una vez estemos en nuestro dashboard.

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/vercel1.png).

Deberemos introducir la URL de nuestro repositorio y presionar sobre "deploy". 

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/vercel2.png).

Esperamos hasta que se despliegue el proyecto y ¡listo!

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/vercel3.png).

Siguiendo la [documentación de Vercel](https://vercel.com/docs), a modo de ejemplo para demostrar que el despliegue continuo funciona correctamente, crearemos un fichero [saludo.ts](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/api/saludo.ts) en el directorio [api](https://github.com/sergiovp/IV-OrganizeAndGo/tree/master/api) que únicamente mostrará un mensaje por pantalla.

Como podemos observar, en nuestro repositorio de GitHub nos aparecerá el siguiente icono:

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/vercel4.png)

Si pinchamos sobre él, podemos ver que el proyecto ha sido desplegado con éxito, pudiendo así consultar las URLs que nos proporciona Vercel:

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/vercel5.png)

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/vercel6.png)

Para ver el resultado de la ejecución de la función, podemos pinchar [aquí](https://iv-organize-and-go.sergiovp.vercel.app/api/saludo).

También hemos instalado la `CLI` en nuestro proyecto. Podemos ver cómo la ejecutamos:

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/vercel7.png)

Podemos también trabajar en local:

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/vercel8.png)

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/vercel9.png)

> Nota: para instalar la CLI se ha seguido la [documentación](https://vercel.com/download). Básicamente es ejecutar el comando `npm i -g vercel`.


### Integración dentro del proyecto general con Vercel

Como hemos visto en el ejemplo anterior, hemos desplegado una función muy pequeña que únicamente muestra un saludo. En este caso, realizaremos una función que se integre en el proyecto, o sea, que sea útil para nuestra aplicación. La respectiva HU se puede consultar [aquí](https://github.com/sergiovp/IV-OrganizeAndGo/issues/72).

Para la ejecución de la función, debemos simular que tenemos la aplicación funcionando, por lo tanto, se han creado dos equipos de trabajo ficticios, con sus respectivas tareas y empleados cada uno.

La función podrá recibir un parámetro (el ID del equipo) de forma que se muestre toda la información relativa a dicho equipo. En caso de que no se le pase ningún parámetro, simplemente se mostrará toda la información relativa de todos los equipos.
Si especificamos un ID de equipo que no exite, nos devolverá un mensaje informando que no hay ningún equipo cuyo ID coincida.

Como resultado, la función nos devolverá toda la información relativa a todos los equipos (o uno de ellos) en formato JSON.

Podemos consultar las siguientes URLs:

+ https://iv-organize-and-go.vercel.app/api/info_equipo

**Esta será la salida que utilizaré para el fichero [5.json](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/5.json) y el enlace que aparecerá en el fichero [iv.yaml](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/iv.yaml) con el tag *URL**.

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/vercel_ejecucion1.png)

+ https://iv-organize-and-go.sergiovp.vercel.app/api/info_equipo?equipo=0

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/vercel_ejecucion2.png)

+ https://iv-organize-and-go.sergiovp.vercel.app/api/info_equipo?equipo=1

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/vercel_ejecucion3.png)

+ https://iv-organize-and-go.sergiovp.vercel.app/api/info_equipo?equipo=2

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/vercel_ejecucion4.png)

En cuanto al código propio de la función, se puede consultar en el fichero [info_equipo.ts](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/api/info_equipo.ts) que lo encontramos en el directorio [api](https://github.com/sergiovp/IV-OrganizeAndGo/tree/master/api).

~~~
export default (request: NowRequest, response: NowResponse) => {
    let mostrar: any;

    initApp();

    // Mostramos un equipo en concreto por su ID
    if (request.query["equipo"]) {
        mostrar = JSON.stringify(obj.getEquipo(request.query["equipo"]));

        // No hay ningún equipo con ese ID
        if (!mostrar) {
            mostrar = "No hay ningún equipo con el ID seleccionado :("; 
        }

    // Mostramos todos los equipos
    } else {
        mostrar = JSON.stringify(obj);
    }

    response.status(200).send(mostrar);
}
~~~

Como vemos, la función es muy sencilla, recibe una petición y una respuesta. la función `initApp()` es la que se encarga de crear los objetos de nuestra clase para que podamos trabajar con ellos. La variable `mostrar` será lo que devolveremos al hacer la petición.
Como vemos, comprobamos si hemos introducido el parámetro `equipo` en cuyo caso, mostramos toda la información relativa a ese equipo que lo distinguimos por su ID. En caso de que no haya un equipo con ese ID, devolveremos un mensaje de error.
Si no introducimos el parámetro `equipo`, devolveremos toda la infomación de todos los equipos.

La respuesta la mandamos en la última línea de código `response.status(200).send(mostrar);`.

### Uso e integración de una plataforma adicional (Netlify)

Para este caso, y en conjunto con la próxima rúbrica y la [HU7](https://github.com/sergiovp/IV-OrganizeAndGo/issues/71), he creado un bot de telegram utilizando Netlify.

En este apartado nos centraremos en la función en sí y en el próximo en el desarrollo del bot.

La función es muy sencilla, los datos del autor los tenemos en formato JSON en un fichero a parte llamado [datos_autor.json](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/functions/datos_autor.json) y que encontramos en el directorio [functions](https://github.com/sergiovp/IV-OrganizeAndGo/tree/master/functions).

Tan solo leemos dicho fichero y accedemos a los distintos campos, que son los siguientes:

+ Autor
+ Contacto
+ Repositorio
+ GitHub

Como he comentado, la función se despliega en Netlify. Para obtener más información sobre la conexión entre Netlify y mi repositorio de GitHub, podemos consultar mi [resposito de ejercicios](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/sesi%C3%B3n_hito_5.md#tomar-alguna-de-las-funciones-de-prueba-de-netlify-y-hacer-despliegues-de-prueba-con-el-mismo) o el [repositorio creado para pruebas](https://github.com/sergiovp/Testing-Netlify). 

### Integración función serverless con bot de telegram

+ **El fichero con la implementación es [info_autor.js](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/functions/info_autor.js) que se encuentra en el directorio [funstions](https://github.com/sergiovp/IV-OrganizeAndGo/tree/master/functions).**

Como he comentado en el anterior apartado, he integrado una función serverless que ofrece información del autor de la aplicación a un bot de telegram.

Para crear el bot, siguiendo [este post](https://elandroidelibre.elespanol.com/2018/02/como-crear-tu-propio-bot-de-telegram.html) le mandé un mensaje a `@BotFather` y especifiqué que quería crear un bot y el nombre de este:

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/bot1.png)

Se pueden configurar otros parámetros del bot, como por ejemplo, la descripción.

En cuanto al **webhook**, he seguido [este tutorial](https://planetachatbot.com/telegram-bot-webhook-heroku-fa53c5d72081). Básicamente para "comunicar" el bot con la función de Netlify mandamos una petición a la API de telegram a la siguiente URL `https://api.telegram.org/botBOT_TOKEN/setWebHook?url=URL_NETLIFY`. 

+ BOT_TOKEN no lo especifica BotFather cuando creamos el bot.
+ URL_NETLIFY es la url a nuestra función serverless.

Como vemos, si la petición tiene éxito, veremos una respuesta como la siguiente:

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/webhookOK.png)

Esto quiere decir que nuestra función serverless ya se encuentra enlazada a nuestro bot.

En cuanto al desarrollo de éste, al principio la idea era utilizar `Telegraf` como framework. Finalmente decidí que no, ya que JJ no lo recomendó ya que usando Telegraf debo especificar en el código de nuevo el token del bot cuando ya lo hice con el webhook.

Por lo que finalmente, tengo una variable llamada `body` que almacena el cuerpo de la petición en formato JSON. He seguido la siguiente página como [tutorial](https://flaviocopes.com/netlify-functions/). Una vez tengo el cuerpo de la petición, lo podemos mostrar para ver qué almacena:

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/body.jpg)

Si nos fijamos, tenemos información sobre los mensajes que mandamos al chat (**message.chat**) y el ID del chat (**message.chat.id**). Estos parámetros nos harán falta para lo siguiente:

+ Mensajes que mandamos al chat: es evidente que en función de lo que escribamos en el chat, el bot deberá responder una cosa u otra. Esto lo gestionamos con la variable `mensajeChat`. 

+ ID del chat: necesaria para que el bot pueda interactuar en el chat. Para ello tenemos la variable `ChatID`.

En el resto del código simplemente me centro en parsear lo que el usuario pueda escribi en el chat y en función de esto, contestar una cosa u otra. Por último, mandamos la respuesta.

Podemos ver al bot funcionando en las siguientes capturas de pantalla:

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/botfuncionando1.jpg)

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/botfuncionando2.jpg)
