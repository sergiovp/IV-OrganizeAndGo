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

### Integración dentro del proyecto general con Vercel

Como hemos visto en el ejemplo anterior, hemos desplegado una función muy pequeña que únicamente muestra un saludo. En este caso, realizaremos una función que se integre en el proyecto, o sea, que sea útil. La respectiva HU se puede consultar [aquí](https://github.com/sergiovp/IV-OrganizeAndGo/issues/72).

Para la ejecución de la función, debemos simular que tenemos la aplicación funcionando, por lo tanto, se han creado dos equipos de trabajo ficticios, con sus respectivas tareas y empleados cada uno.

La función podrá recibir un parámetro (el ID del equipo) de forma que se muestre toda la información relativa a dicho equipo. En caso de que no se le pase ningún parámetro, simplemente se mostrará toda la información relativa de todos los equipos.
Si especificamos un ID de equipo que no exite, nos devolverá un mensaje informando que no hay ningún equipo cuyo ID coincida.

Como resultado, la función nos devolverá toda la información relativa a todos los equipos (o uno de ellos) en formato JSON.

Podemos consultar las siguientes URLs:

+ https://iv-organize-and-go.vercel.app/api/info_equipo

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/vercel_ejecucion1.png)

+ https://iv-organize-and-go.sergiovp.vercel.app/api/info_equipo?equipo=0

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/vercel_ejecucion2.png)

+ https://iv-organize-and-go.sergiovp.vercel.app/api/info_equipo?equipo=1

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/vercel_ejecucion3.png)

+ https://iv-organize-and-go.sergiovp.vercel.app/api/info_equipo?equipo=2

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/vercel_ejecucion4.png)

### Uso e integración de una plataforma adicional (Netlify)

