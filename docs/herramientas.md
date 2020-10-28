# Herramientas
En este fichero iremos haciendo una justificación de cada una de las herramientas que utilizaremos en el desarrollo de **Organize&Go**.

---

## Lenguaje de programación: [TypeScript](https://www.typescriptlang.org) + [Node.js](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwipxL7ioJbsAhVp8-AKHU4MCqMQFjAAegQIAhAC&url=https%3A%2F%2Fnodejs.org%2Fes%2F&usg=AOvVaw0ExrfV3usJ0jiF4UKHq0z3)

Siendo sinceros, la idea inicial del proyecto era implementarlo en [Go](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiE8uqeoZbsAhUqx4UKHUyxBc8QFjAAegQIARAC&url=https%3A%2F%2Fgolang.org%2F&usg=AOvVaw1lAoMTHCkaTnhVJgGL4dBP).

Pero en estos últimos días he investigado bastante sobre el desarrollo de microservicios así como la función de un **DevOps**. Como sabemos, **JavaScript**, según diversas fuentes como [esta](https://hackaboss.com/blog/lenguajes-programacion-demandadas-2020/) *es el lenguaje más demandado de 2020*, lo que ha provocado que me replantee el lenguaje de programación a utilizar.

Como sabemos, **JavaScript** fue creado como lenguaje para desarrollar el front-end pero con tecnologías como **NodeJs** es posible utilizarlo como lenguaje back-end, por lo que me vendrá genial de cara a desarrollar mi microservicio.

Un motivo importante que ha hecho que tome esta decisión ha sido comprobar la amplia comunidad y documentación que tienen detrás, a parte de ser asíncrono, escalable y de disponer de un gran conjunto de tecnologías que podría utilizar para desarrollar el proyecto. 

En definitiva, JavaScript es una gran opción, pero me he decantado finalmente por **TypeScript**, ya que como sabemos, es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases. Creo que podré abordar más cómodamente el problema con un lenguaje tipado y con las mismas ventajas que JavaScript.

---

## Sistema gestor de paquetes (task runner):

Me he decantado por utilizar **npm** como sistema de gestión de paquetes. Por defecto, es el sistema gestor para Node.

**npm** manejará las dependencias de nuestra aplicación de manera muy sencilla. Dichas dependencias las podemos ver en el fichero `package.json`. Para que se instalen, tan solo deberemos ejecutar `npm install`.

No solo se encargará de instalar las dependencias, sino que podrá lanzar la aplicación con `npm start` y los tests con `npm test`.

Cabe destacar que he estudiado la posibilidad de utilizar alternativas a **npm**, una de estas ha sido [yarn](https://yarnpkg.com). Pero como he comentado, **npm** es por defecto el gestor de paquetes y gracias a él podremos tener cualquier librería disponible con solo una línea de código.**npm** me ayudará a administrar los módulos requeridos para el proyecto, distribuir paquetes y agregar dependencias de una manera sencilla.

---

## Testing:

Como sabemos, las pruebas unitarias son fundamentales para asegurar la calidad del producto. En mi caso, usaremos las siguientes herramientas para abordar esta tarea.

### [Mocha](https://mochajs.org)

Es un framework para testing de JavaScript que nos permitirá hacer tanto tests síncronos como asíncronos de manera sencilla. Nos proporciona muchas utilidades para la ejecución y reporte de los tests y a parte, se puede utilizar junto con una gran número de bibliotecas u otros módulos. Esto último ha hecho que me decante por este framework, ya que dispone de una gran comunidad detrás, es sencillo de utilizar y compatible con muchas bibliotecas que me serán de utilidad. Una de estas es **chai**, que lo explicaré más adelante.

Estos son los motivos que me han llevado a elegir este framework frente a otros como podría ser [Jest](https://jestjs.io).

En [este enlace](https://blog.logrocket.com/the-best-unit-testing-frameworks-for-node-js/) y [este otro](https://desarrolloactivo.com/blog/jest-vs-mocha/) he podido leer comparaciones entre distintos frameworks.

### [Chai](https://www.chaijs.com)

Es un librería de aserciones, la cual se puede emparejar a la perfección con Mocha. Chai tiene varias interfaces: **assert**, **expect** y **should**, que nos permiten elegir el estilo que nos resulte más legible y cómodo a la hora de desarrollar los tests. Haciendo uso de esta biblioteca, es evidente que la realización de los tests será más cómoda.

He consultado diversas páginas de documentación sobre la biblioteca, como [esta](https://www.npmjs.com/package/chai) o [esta](https://www.paradigmadigital.com/dev/testeando-javascript-mocha-chai/).

Me he decantado por esta biblioteca ya que me ha parecido súper sencilla de utilizar. Otras alternativas podrían haber sido **assert** o **supertest** pero **chai** dispone de una buena comunidad y es sencillo encontrar información sobre la biblioteca.

Tanto Mocha como Chai quedarán especificados en el `package.json`, de forma que con `npm install` se instalen no solo estas dependencias, sino todas.

Cabe destacar que también he instado **ts-node** para no tener que usar el compilador de TypeScript (tsc) y después ejecutar node sobre los fuentes. Se puede ver el uso de este comando en el package.json cuando ejecuto los tests con el siguiente comando: `mocha -r ts-node/register tests/**/*.ts`.

---

## Docker

### Imagen base

El fichero [Dockerfile](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/Dockerfile) será el encargado de construir la imagen con las herramientas necesarias para que los tests de nuestro proyecto se ejecuten. En este apartado justificaremos las configuración del fichero *Dockerfile*.

En primer lugar, deberemos elegir la imagen base a partir de la cual crearemos nuestra propia imagen.

Siguiendo el guión de teoría con la siguiente cita *"El usar imágenes oficiales de un lenguaje es mucho más conveniente que usar la de un sistema operativo y posteriormente instalar el lenguaje y cualquier otra cosa que necesite"* he decidido usar una imagen **oficial**.

Dicho esto, buscaremos una base que tenga instalado por defecto nuestro task runner, o sea, node y npm. De esta forma nos ahorraremos dicha instalación en el Dockerfile.

Para Node, tenemos varias alternativas:
1. `node:<version>`
2. `node:<version>-alpine`
3. `node:<version>-slim`

En cuanto a la **primera opción**, es la imagen por defecto. Esto implica que si no estamos seguros de cuáles van a ser nuestras necesidades, probablemente deberíamos elegir esta opción. 

La **segunda opción**, como el nombre indica, está basada en la distribución Linux *Alpine*. Esta imagen tiene un tamaño reducido, por lo que la imagen que creemos a partir de esta problablemente también lo tendrá.

La **tercera opción** sólo contiene los paquetes mínimos para poder ejecutar node.

Haremos una tabla con el tamaño de las imágenes:

|node:14-Alpine|node:14-Slim|node:14|
|---|---|---|
|41.42MiB|57.89MiB|316.79MiB|

Como podemos apreciar, la imagen `node:14` la descartamos del tirón por razones obvias, es demasiado pesada.

Lo que me sorprende de la comparación entre *Alpine* y *Slim* es que a pesar de que slim contiene los paquetes mínimos, es más pesada que alpine.

Compararemos ahora, por tanto, los tiempos de construcción de las imágenes que nos proporciona DockerHub tanto de *Alpine* como de *Slim*.

![tiempo_alpine](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/alpine.png)
![tiempo_slim](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/slim.png)

Como podemos observar, el tiempo de construcción con la imagen *Slim* es la mitad del tiempo con la imagen *Alpine* (1m vs 2m).

Otro punto a favor de *Slim* es que no me ha dado problemas a la hora de crear un usuario para que no se ejecute en modo root. *Alpine* sin embargo me ha estado problemas con los comandos *adduser* y *useradd*. 

Por los motivos citados, finalmente he decido utilizar **node:14-slim**.

### Dockerfile

En este apartado justificaremos cada línea de nuestro fichero [Dockerfile](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/Dockerfile).

~~~
FROM node:14-slim
~~~
Es la imagen base de la que partimos. En el apartado anterior tenemos la justificación de esta elección.

~~~
LABEL version="1.0" maintainer="sergiovp96@gmail.com"
~~~
Con el tag LABEL especificamos metadatos. Se pueden especificar el autor, fecha de construcción, descripción, etc. En nuestro caso hemos especificado la versión y el autor.

~~~
COPY package*.json ./
~~~
Como sabemos, es esencial para poder ejecutar nuestros tests el fichero *packahe.json* y *package-lock.json*. Con ellos, nos descargaremos las dependencias o módulos necesarios del proyecto, como *Mocha*, *Chai*, etc.

~~~
RUN npm install && rm package*.json
~~~
En este caso ejecutamos dos comandos.

1. Instalamos todas las dependencias y módulos especificados en el package.json con las versiones especificadas en el package-lock.json.
2. Una vez instalados los módulos, ni el package.json ni el package-lock.json nos hacen falta. Los borramos.

~~~
WORKDIR /test
~~~
Especificamos el directorio de trabajo. En este caso, se creará un directorio llamado "test" y en dicho directorio se ejecutará el comando `npm test` especificado un poco más abajo.

~~~
VOLUME /test
~~~
Creamos un punto de montaje en el directorio creado.

~~~
ENV PATH=/node_modules/.bin:$PATH
~~~
Añadimos el directorio *node_modules* a la lista de *PATHs* de nuestro contenedor. De esta forma los comandos podrán ser ejecutados globalmente dentro del contenedor.

~~~
USER node
~~~
La imagen que utilizamos de node tiene un usuario ya creado distinto de root. En lugar de crear a mano nosotros un usuario, utilizamos este ahorrándonos un comando en el Dockerfile. Se podría decir que es una medida de seguridad, ya que Docker, por defecto utiliza el usuario root para ejecutar comandos. Por ello, especificamos un usuario distinto sin permisos de administrador para que ejecute
el comando `npm test`.
~~~
CMD ["npm", "test"]
~~~
Ejecutamos el comando necesario para que se lancen los tests.

### Buenas prácticas

1. Los tests no son ejecutados por el usuario root. Como sabemos, el usuario por defecto que utiliza docker es root, pero no es necesario que nuestros tests sean ejecutados con permisos de administrador. Este es el motivo por el cual especificamos que los tests sean ejecutados por el usuario "**node**".

2. No hemos creado un usuario nuevo. Para realizar el punto 1, podríamos haber creado nosotros mismos un usuario nuevo para que ejecute los tests. En este caso, hemos utilizado el usuario sin privilegios de administrador que viene implícito en la imagen, de forma que nos hemos ahorrado un comando.

3. El fichero node_modules no nos hace falta en el contenedor. Este es el motivo por el cual hemos creado un fichero [.dockerignore](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/.dockerignore) (al igual que hicimos con el fichero [.gitignore](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/.gitignore)).

4. Hemos minimizado el número de *layers*. Cuantos más *layers* tengamos, mayor será el tamaño de construcción. Las instrucciones que generan layers son *RUN*, *COPY* y *ADD*. Por este motivo, ejecutamos dos comandos con un mismo *RUN* y únicamente hacemos *COPY* de los ficheros estrictamente necesarios. De esta forma, no incrementamos el tamaño de la imagen final.

5. Hemos eliminado ficheros una vez que no nos ha sido necesario mantenerlos.

6. Hemos usado una imagen base oficial. Se recomienda que siempre que se pueda, se usen dichas imágenes.

7. Hemos hecho uso de la instrucción TAG, añadiendo metadatos del proyecto que nos podrían servir para organizar nuestras imágenes, especificando versiones o el autor, por ejemplo.

8. Hemos hecho la instrucción *RUN* más legible diviendo en saltos de línea los comandos a ejecutar. Esto nos ayudará a mantener nuestro contenedor a la hora de añadir nuevos comandos, así como hacerlo más legible o entendible.

9. Hemos usado la instrucción *ENV* para actualizar el *PATH* de nuestro contenedor, de forma que el comando que ejecutemos se pueda hacer de forma global en todo el contenedor.

10. Uso de la instrucción *VOLUME* ya que se recomienda usarla para directorios creados por el contenedor, en nuestro caso, el directorio `/test`.

11. Hemos hecho uso de la instrucción *WORKDIR* en lugar de ejecutar comandos como `RUN mkdir ...&& cd ...`.

La documentación seguida se puede consultar en la página oficial de [docker](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) y en los [apuntes de clase](http://jj.github.io/IV/documentos/temas/Contenedores).

---

## Base de datos:

> Aún por decidir. El proyecto no es lo suficientemente maduro como para elegir qué SGBD utilizar.

---

## Servicio de logs:

> Aún por decidir. El proyecto no es lo suficientemente maduro como para elegir qué servicio de logs utilizar.
