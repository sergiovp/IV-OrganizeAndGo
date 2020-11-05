## Integración continua

La integración continua es algún tipo de acción que se ejecuta cuando sucede algún evento en un repositorio. Normalmente, estos eventos son ejecutar los tests oportunos al código cada vez que se quiera añadir algo a la rama máster. Una vez que los tests pasan con éxito, el código añadido podrá pasar a producción.

Como vemos, la integración continua es un proceso muy importante en el desarrollo de software, más en concreto, al trabajar en la nube. De esta forma, se pueden detectar errores antes de ser añadidos a producción, aumentando la fiabilidad y calidad del código. La integración continua también nos ahorrará tiempo a la larga, ya que en caso de no realizar un sistema de tests, dichos tests los tendremos que hacer nosotros implícita y manualmente antes de integrar código nuevo. Sin embargo, de haber realizado un buen sistema de tests, estos se ejecutarán automáticamente tantas veces como cambios hagamos sin necesidad de preocuparnos.

En este documento, quedarán reflejados y explicados todos los aspectos relativos a la integración continua de nuestro proyecto.

### Integración continua con Travis funcionando y justificación

*El objetivo de esta parte es que con cada commit hecho en el repositorio, se lance la ejecución de los tests de forma automática.*

Una de las rúbricas de este hito es tener funcionando la integración continua y justificar la misma. Para este caso, explicaremos cómo lo hechos hecho utilizando [Travis CI](https://travis-ci.com) (es obligatorio que uno de los sistemas de CI sea este).

En primer lugar nos dimos de alta en la plataforma. Desde la misma, tras el registro, podremos asociar uno, varios o todos los repositorios para aplicar la integración continua. El siguiente paso será incorporar un fichero `.travis.yml` en nuestro repositorio.

Estos primeros pasos han sido muy resumidos, pero se pueden encontrar más detallados y con capturas de pantalla en mi [repositorio de ejercicios](https://github.com/sergiovp/IV-Ejercicios/blob/main/Sesiones/sesión_hito_4.md).

En este caso, **he decidido utilizar mi contenedor de Docker desarrollado en el hito anterior para ejecutar los tests**, pasaremos por tanto, a comentar mi fichero [.travis.yml](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/.travis.yml).

~~~
language: minimal
~~~

Como vemos, hemos especificado el lenguaje "minimal". Travis dispone de un montón de lenguajes que se pueden utilizar, los podemos consultar [aquí](https://docs.travis-ci.com/user/languages/). Incluye también uno para Node, que nos vendría muy bien para nuestro proyecto... Entonces, ¿por qué hemos decido utilizar **minimal**?

Como he comentado previamente, usaremos el Docker para ejecutar los tests (que de por sí ya trae instalado node como vimos en el hito anterior). Este es el motivo por el cual no necesitamos un lenguaje completo, sino uno que incluya lo mínimo para poder ejecutar el docker.

Dicha imagen **minimal** contiene paquetes que no utilizaremos, como por ejemplo, python o herramientas de compilación como gcc, pero como he comentado, es más coherente usar esta imagen que la de un lenguaje en concreto que no utilizaremos.

~~~
services:
  - docker
~~~

En el apartado de servicios, podríamos especificar en otras cosas, la base de datos a utilizar. En nuestro caso, simplemente especificaremos que vamos a utilizar Docker.

~~~
env:
  - URL_IMAGEN=sergiovela/iv-organizeandgo:latest
~~~

Definimos una variable que contenga la URL de nuestro contenedor. Esta será usada más adelante.

~~~
before_install:
  - docker pull $URL_IMAGEN
~~~

Es importante descargarse o en caso de ya haberlo hecho, actualizar la versión de nuestro contenedor. Por ello, especificamos que se haga un pull de nuestro docker almacenado en DockerHub.

~~~
script: docker run -t -v `pwd`:/test $URL_IMAGEN
~~~

Con la instrucción `script` especificamos el comando a ejecutar. En este caso será la ejecución de los tests.

En las siguientes capturas de pantalla podemos comprobar como, efectivamente, funciona y se ejecutan los tests:

![captura1](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/travis1.png)
![captura2](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/travis2.png)

### Sistema de integración continua adicional funcionando y justificación

Para este caso, he decidido utilizar las **actions** de GitHub, ya que nunca me había animado a utilizarlas, he aprovechado la ocasión.

En este caso, al igual que en el ejemplo anterior, construiremos nuestro contenedor almacenado en GHCR, lo actualizaremos y ejecutaremos los tests.

Para ello, creamos un fichero en `.github/workflows/`. Podemos consultar el fichero [aquí](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/.github/workflows/updatepackage.yml).

Comentamos el fichero:

~~~
name: Integración continua
on: push
env:
  URL_IMAGEN: ghcr.io/sergiovp/iv-organizeandgo:latest
~~~

+ Con el tag 'name' especificamos un nombre para el flujo de trabajo.
+ Con el tag 'on' especificamos el evento de GitHub que debe de ocurrir para que se lance la acción. En este caso especificamos 'push' ya que queremos que los tests se ejecuten siempre tras realizar un push sobre el repositorio.
+ Definimos una variable con la URL de nuestro contenedor para que podamos trabajar con ella más cómodamente.

~~~
jobs:
  build-push-run-docker:
    name: Reconstruimos y atualizamos la imagen y ejecutamos los tests
    runs-on: ubuntu-latest
    steps:
      -
        name: Comprobamos el repositorio para que podamos acceder a él
        uses: actions/checkout@v2
      -
        name: Nos logeamos en GHCR
        uses: docker/login-action@v1
        with:
          registry: ghcr.io
          username: ${{ github.repository_owner }}
          password: ${{ secrets.CR_PAT }}
      -
        name: Ejecutamos los comandos para construir, actualizar y ejecutar los tests
        run: docker build -t $URL_IMAGEN . && docker push $URL_IMAGEN && docker run -t -v `pwd`:/test $URL_IMAGEN 
~~~

En el tag `jobs` especificaremos las tareas a abordar. Si nos fijamos, únicamente tenemos una tarea a la que he denominado **build-push-run**. También se ha especificado que se ejecute en la última versión de ubuntu.

Con la acción `actions/checkout@v2` comprobamos el repositorio para que podamos acceder a él. Tras lo cual, nos logeamos en GHCR con `docker/login-action@v1`. Podemos especificar el usuario haciendo uso de la variable `github.repository_owner` y para hacer uso del *token* generado para poder hacer uso de la action, hemos debido crear una "*variable secreta*" llamada **CR_PAT** que almacene el token. Esto se utiliza para que el token quede encriptado y no pueda ser utilizado por alguien que no es colaborador del repositorio.
En esta captura podemos ver la variable secreta creada:
![captura-variable](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/variable_secreta.png)

El próximo paso es ejecutar los comandos oportunos, en este caso, se construye el contenedor con nuestro Dockerfile, se hace un push para que se actualice también el contenedor remoto y se ejecutan los tests.

Podemos comprobar que efectivamente se ejecutan los tests correctamente en las siguientes capturas:
![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/action_funciona2.png)

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/action_funciona1.png)

**NOTA IMPORTANTE**

Hemos comentado que en el tag `jobs` especificamos las tareas a abordar... ¿no sería más coeherente dividir nuestra `action` en tres partes?

Estas tres partes podrían ser:

1. Construcción del contenedor
2. Actualización del contenedor remoto
3. Ejecución de los tests

Suena coherente que se hiciera de esa forma. Lo que me ha llevado a hacerlo todo con una única tarea es que dividiendo la tarea en tres, nos debemos logear 3 veces en GHCR y por tanto, copiar y pegar lo mismo tres veces. A parte, al ejecutar los tests, siempre se tiene que descargar al completo la imagen porque no la encuentra localmente como podemos ver en la siguiente captura:

![](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/descarga_imagen.png)

Esto implica que github va a tardar más en terminar la action, haciéndola más ineficiente.

Sin embargo, si construimos, actualizamos y ejecutamos los tests con una única tarea, nos ahorramos descargarnos la imagen y tener que logearnos 3 veces en GHCR (con logearnos una vez nos basta). De esta forma los tests se ejecutan más rápido.

Esto lo podemos ver en las siguientes capturas:

Construimos la imagen:

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/construimos_imagen.png)

Actualizamos la imagen remota:

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/actuailzamos_imagen.png)

Sin necesidad de volver a descargar la imagen, ejecutamos los tests:

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/ejecucion_tests.png)

**Otra nota**:

En este caso, para variar un poco con respecto a la ejecución de los tests con Travis, se ha intentado realizar dicha ejecusión en un SO distinto (MacOS o Windows). El problema es como podemos ver en la siguiente captura de pantalla, que no es posible logearse en GHCR con un sistema distinto a Linux:

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/soloLINUX.png)

### Uso correcto del gestor de tareas en todos los casos anteriores.

Como hemos comentado en los dos puntos anteriores, hemos hecho uso del docker del hito anterior para la ejecución de los tets, por lo tanto, en los ficheros de configuración de la integración continua no hemos tenido que hacer uso de nuestro gestor de tareas de manera implícita, ya que para eso, lo utilizamos en el docker.

No obstante, me he propuesto utilizarlo con un tercer sistema de integración continua, para este caso, utilizaré [shippable](https://www.shippable.com).

Lo que más me ha llamado la atención de shippable es que si detecta que tienes el fichero `package.json`, da por hecho que se utiliza `npm`. Por ello, se ejecuta el comando `npm install` por defecto, sin neesidad de que se lo especifiquemos implícitamente. Por defecto, también ejecuta el comando `npm test` por lo que el fichero de configuración de este sistema de CI es tan sencillo como:

~~~
language: node_js

node_js:
  - 11.10.0
  - 12.19.0
  - 14.13.0
~~~

Como vemos, tan solo debemos especificar el lenguaje y las versiones en las que queremos que se ejecute. Para esto, he leído la [documentación](http://docs.shippable.com/ci/nodejs-continuous-integration/).

Hemos especificado 3 versiones de node. La 14.13.0 es la que uso en local. Las otras dos son anteriores y nos servirán para saber si nuestro proyecto funciona en dichas versiones.

Comprobaremos que funciona correctamente:

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/shippable_tests1.png)

Como hemos podido observar, se ejecuta en las tres versiones especificadas. Podemos entrar en detalle pinchando sobre alguna:

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/shippable_tests2.png)

En este caso, podemos ver como se ejecuta `npm install` y `npm test`.

![captura](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/images/shippable_tests3.png)

En este último caso, podemos ver como los tests efectivamente han sido ejecutados correctamente.

Como acabamos de ver, en este caso tampoco hemos tenido que utilizar nuestro task runner de manera implícita.

En resumidas cuentas, tanto en Travis, como en la action de github, nuestro task runner ha sido ejecutado en el docker. Por otro lado con shippable, es ejecutado por defecto. 

Podemos concluir afirmando que el gestor de tareas ha sido usado correctamente en los tres casos.

### Aprovechamiento del contenedor de Docker.

El contenedor de Docker ha sido utilizado tanto para ejecutar los tests con Travis como con la action de github. En ambos casos se ejecuta el contenedor tras un commit. Por lo que el contenedor construido en el hito anterior ha sido aprovechado para ejecutar los tests en este.

Cabe destacar que es muy cómodo trabajar con un Docker cuando queremos aplicar integración continua, ya que únicamente tendremos que encargarnos de ejecutar el contenedor, sin necesidad de utilizar nuestro gestor de tareas. Aunque hay sistemas de CI, como hemos visto anteriormente, que no es necesitario ejecutar el gestor de tareas porque se hace por defecto, en este caso hablo de shippable.

También comprobado como la ejecución de los tests se hace de manera correcta usando el contenedor.
