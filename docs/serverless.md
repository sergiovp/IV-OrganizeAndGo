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

