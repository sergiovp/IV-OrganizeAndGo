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

## Sistema gestor de paquetes:

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

El fichero [Dockerfile]() será el encargado de construir la imagen con las herramientas necesarias para que los tests de nuestro proyecto se ejecuten. En este apartado justificaremos las configuración del fichero *Dockerfile*.

En primer lugar, deberemos elegir la imagen base a partir de la cual crearemos nuestra propia imagen.

Para Node, tenemos varias alternativas:
1. node:<version>
2. node:<version>-alpine
3. node:<version>-slim


---

## Base de datos:

> Aún por decidir. El proyecto no es lo suficientemente maduro como para elegir qué SGBD utilizar.

---

## Servicio de logs:

> Aún por decidir. El proyecto no es lo suficientemente maduro como para elegir qué servicio de logs utilizar.
