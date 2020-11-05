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
  main:
    name: Build and Push Docker Image to Github Container Registry and Run it
    runs-on: ubuntu-latest
    steps:
      -
        name: Check out the repo
        uses: actions/checkout@v2
      -
        name: Login to GitHub Container Registry
        uses: docker/login-action@v1
        with:
          registry: ghcr.io
          username: ${{ github.repository_owner }}
          password: ${{ secrets.CR_PAT }}
      -
        name: Build, Push and Run the docker
        run: docker build -t $URL_IMAGEN . && docker push $URL_IMAGEN && docker run -t -v `pwd`:/test $URL_IMAGEN 

~~~

+ 

### Uso correcto del gestor de tareas en todos los casos anteriores.

### Aprovechamiento del contenedor de Docker.

El contenedor de Docker ha sido utilizado tanto para ejecutar los tests con Travis como con la action de github. En ambos casos se ejecuta el contenedor tras un commit. 