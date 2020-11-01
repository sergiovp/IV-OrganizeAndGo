# Infraestructura Virtual - Organize&Go

Repositorio dedicado al proyecto a desarrollar de la asignatura Infraestructura Virtual, impartida por @jj y @fbarranco en Ingeniería Informática, UGR (2020/21).

---

## Descripción

+ ¿Eres jefe de tu empresa?
+ ¿Sueles trabajar de manera colaborativa con otra gente?

En caso de que se cumpla alguna de la cuestiones anteriores... 

*¿Crees que os organizáis de manera correcta? ¿Sabes en todo momento qué trabajo está desempeñando cada uno de tus empleados/compañeros? ¿Tienes idea del tiempo aproximado que tardarán en abordar sus tareas y cuál será la próxima tarea a realizar?*

En caso negativo, estás de suerte. **Organize&Go** se define como un *microservicio* desarrollado para abordar los problemas planteados anteriormente.

Se podrán organizar equipos de trabajo de manera eficiente, de forma que en todo momento se conozcan las tareas a ser desarrolladas, así como el tiempo estimado en terminar cada una de ellas, la prioridad o el empleado/compañero al que se le ha sido asignada.

---

## Herramientas

Se pueden consultar más detalles en el fichero [herramientas.md](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/herramientas.md).

+ Lenguaje de programación: [TypeScript](https://www.typescriptlang.org) + [Node.js](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwipxL7ioJbsAhVp8-AKHU4MCqMQFjAAegQIAhAC&url=https%3A%2F%2Fnodejs.org%2Fes%2F&usg=AOvVaw0ExrfV3usJ0jiF4UKHq0z3)

+ Herramientas de testing: [mocha](https://mochajs.org) + [chai](https://www.chaijs.com)

+ Despliegue de la aplicación en la nube: [docker](https://www.docker.com)

+ Base de datos: *aún por decidir*

+ Sistema de logs: *aún por decidir*

---

## Documentación

En el directorio [docs](https://github.com/sergiovp/IV-OrganizeAndGo/tree/master/docs) encontraremos distintos ficheros relativos al desarrollo del proyecto. Dichos ficheros son:

+ [config_git.md](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/config_git.md). Se aportan pruebas para reflejar que git ha sido configurado correctamente.

+ [herramientas.md](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/herramientas.md). Una justificación de la elección de las herramientas utilizadas para abordar el desarrollo de **Organize&Go**.

+ [desarrollo.md](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/desarrollo.md). Resumen de las tareas desarrolladas en cada práctica.

---

## App

En el directorio [app](https://github.com/sergiovp/IV-OrganizeAndGo/tree/master/app/) tenemos el código de nuestra aplicación.

+ [index.ts](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/app/index.ts) es el fichero principal que cumple la función de "*main*".

Las clases las encontramos en el directorio [organizeandgo](https://github.com/sergiovp/IV-OrganizeAndGo/tree/master/app/organizeandgo). Hasta el momento tenemos las siguientes:

+ [empleado.ts](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/app/organizeandgo/empleado.ts)
+ [equipo.ts](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/app/organizeandgo/equipo.ts)
+ [tarea.ts](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/app/organizeandgo/tarea.ts)
+ [organizeandgo.ts](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/app/organizeandgo/organizeandgo.ts). Este es el fichero *gestor*

---

## Despliegue

> NOTA: Como prerrequisito, se debe tener instalado [Node y npm](https://nodejs.org/es/download/).

Clonamos el respositorio:
~~~
git clone https://github.com/sergiovp/IV-OrganizeAndGo
~~~

Nos situamos sobre el repositorio:
~~~
cd IV-OrganizeAndGo
~~~

Instalamos las dependencias y módulos:
~~~
npm install
~~~

Lanzamos la aplicación:
~~~
npm start
~~~

---

## Testing

> NOTA: Como prerrequisito, se debe tener instalado [Node y npm](https://nodejs.org/es/download/).

Clonamos el respositorio:
~~~
git clone https://github.com/sergiovp/IV-OrganizeAndGo
~~~

Nos situamos sobre el repositorio:
~~~
cd IV-OrganizeAndGo
~~~

Instalamos las dependencias y módulos:
~~~
npm install
~~~

Lanzamos los tests:
~~~
npm test
~~~

Los tests los encontramos en el directorio [tests](https://github.com/sergiovp/IV-OrganizeAndGo/tree/master/tests).
Tenemos un fichero por cada clase de nuestro proyecto:

+ [empleado_test.ts](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/tests/empleado_test.ts)
+ [tarea_test.ts](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/tests/tarea_test.ts)
+ [equipo_test.ts](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/tests/equipo_test.ts)
+ [organizeandgo_test.ts](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/tests/organizeandgo_test.ts)

---

## Docker

Todo lo relativo a la práctica de Docker lo encontramos justificado en el fichero [herramientas.md](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/herramientas.md).

Por comodidad, se ofrecen enlaces directos a dicha documentación:

+ [Elección y justificación de la imagen base usada](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/herramientas.md#imagen-base)

+ [Fichero Dockerfile](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/Dockerfile)

+ [Justificación desarrollo fichero Dockerfile](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/herramientas.md#dockerfile)

+ [Contenedor subido a DockerHub](https://hub.docker.com/r/sergiovela/iv-organizeandgo)

+ [Actualización automática del contenedor en DockerHub](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/herramientas.md#dockerhub)

+ [Buenas prácticas desarrollo de Dockerfile](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/herramientas.md#buenas-pr%C3%A1cticas)

+ [Añadido fichero .dockerignore](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/.dockerignore)

+ [Optimización Dockerfile]()

### Ejecutar los tests con Docker

> NOTA: Como prerrequisito, se debe tener instalado [Docker](https://docs.docker.com/get-docker/).

Clonamos el respositorio:
~~~
git clone https://github.com/sergiovp/IV-OrganizeAndGo
~~~

Nos situamos sobre el repositorio:
~~~
cd IV-OrganizeAndGo
~~~

Descargamos la imagen:
~~~
docker pull sergiovela/iv-organizeandgo:latest
~~~

> NOTA: No es necesario descargarse la imagen previamente. Este proceso se hará solo si lo ejecutamos directamente como vemos en la siguiente línea.

Los ejecutamos:
~~~
docker run -t -v `pwd`:/test sergiovela/iv-organizeandgo
~~~

---

## GitHub Container Registry

He hecho uso de un registro alternativo a DcokerHub, en este caso es *GitHub Container Registry*.

El paquete se puede ver [aquí](https://github.com/users/sergiovp/packages/container/package/iv-organizeandgo).

### Ejecutar los tests con GitHub Container Resgistry

> NOTA: Como prerrequisito, se debe tener instalado [Docker](https://docs.docker.com/get-docker/).

Clonamos el respositorio:
~~~
git clone https://github.com/sergiovp/IV-OrganizeAndGo
~~~

Nos situamos sobre el repositorio:
~~~
cd IV-OrganizeAndGo
~~~

Descargamos la imagen:
~~~
docker pull ghcr.io/sergiovp/iv-organizeandgo:latest
~~~

> NOTA: No es necesario descargarse la imagen previamente. Este proceso se hará solo si lo ejecutamos directamente como vemos en la siguiente línea.

Los ejecutamos:
~~~
docker run -t -v `pwd`:/test ghcr.io/sergiovp/iv-organizeandgo:latest
~~~
> **NOTA IMPORTANTE**: Ver esta [ISSUE](https://github.com/sergiovp/IV-OrganizeAndGo/issues/55)

---

## Historias de usuario

Como sabemos, un proyecto debe de estar bien especificado, en nuestro caso, dichas especificaciones las haremos en forma de **historia de usuario**. Serán documentadas en issues y a medida que avancemos con el proyecto, se podrán incorporar más.

+ [HU0: Introducción](https://github.com/sergiovp/IV-OrganizeAndGo/issues/5)
+ [HU1: Consultar información de las tareas](https://github.com/sergiovp/IV-OrganizeAndGo/issues/6)
+ [HU2: Modificar información de las tareas](https://github.com/sergiovp/IV-OrganizeAndGo/issues/7)
+ [HU3: Añadir equipos](https://github.com/sergiovp/IV-OrganizeAndGo/issues/32)
+ [HU4: Añadir empleados ](https://github.com/sergiovp/IV-OrganizeAndGo/issues/33)
+ [HU5: Añadir tareas](https://github.com/sergiovp/IV-OrganizeAndGo/issues/34)

---

## Autor

+ [Sergio Vela Pelegrina](https://github.com/sergiovp).

---

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
