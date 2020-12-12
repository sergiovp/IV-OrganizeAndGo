## Sexto hito: Diseño y test de un microservicio.

### Justificación técnica del framework elegido para el microservicio con documentación sobre cómo se usa en la práctica.

Como he comentado en otros apartados de la documentación, NodeJS es un lenguaje con un amplio ecosistema. Esto implica que haya un montón de frameworks, bibliotecas y tecnologías que podemos usar para abordar el problema.

En este aso, debemos elegir un framework para el desarrollo del microservicio. Si realizamos una búsqueda básica sobre frameworks, los más sonados son los siguientes:

+ Express
+ Sails
+ LoopBack
+ Koa
+ Restify
+ Hapi

En general, la mayoría de webs consultadas suelen estar de acuerdo en que los frameworks mencionados anteriormente son los más utilizados/populares para la tarea que debemos abordar.

Las fuentes consultadas son las siguientes:
+ [https://www.tecmint.com/best-nodejs-frameworks-for-developers/](https://www.tecmint.com/best-nodejs-frameworks-for-developers/)
+ [https://www.quora.com/What-is-the-best-framework-for-microservices-in-NodeJS](https://www.quora.com/What-is-the-best-framework-for-microservices-in-NodeJS)
+ [https://geekflare.com/javascript-frameworks-for-api/](https://geekflare.com/javascript-frameworks-for-api/)
+ [https://rapidapi.com/blog/best-nodejs-frameworks/](https://rapidapi.com/blog/best-nodejs-frameworks/)
+ [https://www.simform.com/best-nodejs-frameworks/](https://www.simform.com/best-nodejs-frameworks/)

Sin ninguna duda, el más utilizado de todos es [Express](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiWytbLrcbtAhWQHxQKHQouB60QFjAAegQIARAD&url=https%3A%2F%2Fexpressjs.com%2Fes%2F&usg=AOvVaw2Wt2PlFo8u9yqeVTQPu6HN). De hecho, otros frameworks desarrollados para cumplir la misma tarea que express, han sido implementados basados en este mismo. Esto no implica que sea el que más nos convenga utilizar para nuestro proyecto. Por eso, vamos a realizar un pequeño estudio sobre este framework y las alternativas mencionadas anteriormente.

Para comenzar, echaremos un vistazo a la web [npmtrends](https://www.npmtrends.com/koa-vs-loopback-vs-sails-vs-express-vs-restify-vs-hapi) la cual nos ofrece información sobre los frameworks de node.

En este caso, veremos un gráfico con el número de descargas de cada framework mencionado anteriormente en los últimos 5 años:

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/comparativa_fw.png)

Como vemos, teníamos razón afirmando que Express es con diferencia el más utilizado y popular.

En este caso, quitaremos Express del gráfico para que podamos observar mejor cuál es el más utilizado tras éste:

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/comparativa_fw2.png)


En resumen, tenemos el siguiente **Ranking popularidad/descargas**:

1. Express
2. Koa
3. Hapi
4. Restify

En este caso, podemos ver las actualizaciones, el tamaño del módulo, fecha de creación, etc.

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/comparativa_fw3.png)

Como vemos, Express es el más maduro de todos (fue el que antes se desarrolló). Los 4 frameworks son actualizados con frecuencia, lo cual es una buena noticia y como curiosidad, podemos observar el tamaño tan reducido de Koa con respecto a sus competidores.

Tras estas gráficas comparativas, pasaremos a la ejecución de un Benchmark para obtener datos más objetivos sobre las prestaciones de cada framework.

En este caso, utilizaremos [ab](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjol574ysbtAhXXQkEAHQJaAnUQFjAAegQIARAC&url=https%3A%2F%2Fhttpd.apache.org%2Fdocs%2F2.4%2Fprograms%2Fab.html&usg=AOvVaw1E9XkdDRN5RkpsgZUEUrZ4) que es un benchmark desarrollado por Apache para servidores HTTP.

El comando que ejecutaremos será:

~~~
ab -c 100 -n 10000 "http://localhost:3000/"
~~~

Los parámetros son los siguientes:

+ `ab` es el comando para ejecutar el benchmark
+ `-c` indica el número de peticiones concurrentes. Para este caso, he decidido simular 100 peticiones simultáneas.
+ `-n` el número de peticiones totales. Para este caso, realizaremos un total de 10000 peticiones.

Como resultado de la ejecución del benchmark, se muestran distintos parámetros como el tiempo que tarda en ejecutarse el test, los bytes transferidos, porcentaje de peticiones servidas, etc.

Para este caso, nos centraremos en tres parámetros, que son los más importantes a la hora de decidirnos por un framework u otro, dichos parámetros serán:

+ Peticiones por segundo. (Resultado de dividir el número de peticiones por el tiempo total)
+ Tiempo por petición. (Tiempo medio para cada petición)
+ Tiempo por petición concurrente. (Tiempo medio para cada conjunto de peticiones concurrentes)
+ Tiempo de conexión medio. La media de la suma del tiempo de establecer cada conexión más el tiempo en procesarla)

Lógicamente, deberemos de tener levantada la pequeña app para poder realizarle las peticiones. Para ello, he implementado un 'Hola Mundo' haciendo uso de los distintos frameworks (express, hapi, restify y koa) obteniendo los siguientes resultados:

|  | Express | Koa | Hapi | Restify |
| -- | -- | -- | -- | -- |
| Peticiones por segundo | 1726.00 | 2822.18 | 2208.09 | 2009.12 |
| Tiempo por petición (ms) | 0.579 | 0.354 | 0.453 | 0.498 |
| Tiempo por petición concurrente (ms) | 57.937 | 35.434 | 45.288 | 49.773 |
| Tiempo de conexión (ms) | 55 | 31 | 41  | 41 |
