# Infraestructura Virtual - Organize&Go

Repositorio dedicado al proyecto a desarrollar de la asignatura Infraestructura Virtual, impartida por @jj en la UGR (2020/21).

---

## Descripción

+ ¿Eres jefe de tu empresa?
+ ¿Sueles trabajar de manera colaborativa con otra gente?

En caso de que se cumpla alguna de la cuestiones anteriores... 

*¿Crees que os organizáis de manera correcta? ¿Sabes en todo momento qué trabajo está desempeñando cada uno de tus empleados/compañeros? ¿Tienes idea del tiempo aproximado que tardarán en abordar sus tareas y cuál será la próxima tarea a realizar?*

En caso negativo, estás de suerte. **Organize&Go** se define como un *microservicio* desarrollado para abordar los problemas planteados anteriormente.

Se podrán organizar equipos de trabajo de manera eficiente, de forma que en todo momento se conozcan las tareas que están siendo desarrolladas por cada empleado/compañero, el tiempo estimado para la realización de dicha tarea, la cola de trabajo que tiene e incluso la importancia o prioridad de dicha cola.

---

## Herramientas

Se pueden consultar más detalles en el fichero [herramientas.md](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/herramientas.md).

+ Lenguaje de programación: [TypeScript](https://www.typescriptlang.org) + [Node.js](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwipxL7ioJbsAhVp8-AKHU4MCqMQFjAAegQIAhAC&url=https%3A%2F%2Fnodejs.org%2Fes%2F&usg=AOvVaw0ExrfV3usJ0jiF4UKHq0z3)

+ Herramientas de construcción y automatización de tests: *aún por decidir*. **Podría ser [mocha](https://mochajs.org).

+ Frameworks: *aún por decidir*

+ Base de datos: *aún por decidir*

+ Sistema de logs: *aún por decidir*

---

## Documentación

En el directorio [docs](https://github.com/sergiovp/IV-OrganizeAndGo/tree/master/docs) encontraremos distintos ficheros relativos al desarrollo del proyecto. Dichos ficheros son:

+ [config_git.md](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/config_git.md). Se aportan pruebas para reflejar que git ha sido configurado correctamente.

+ [herramientas.md](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/herramientas.md). Una justificación de la elección de las herramientas utilizadas para abordar el desarrollo de **Organize&Go**.

+ [desarrollo.md](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/docs/desarrollo.md). Resumen de las tareas desarrolladas en cada hito.

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

> En construcción, en este apartado se explicará todo lo relativo al testing.

> En cuanto a las herramientas de construcción, se explicarán en el fichero herramientas.md. Quedando reflejado el motivo por el cual uso dicha herramienta. En este caso, al usar JS + Node, usaré el package.json para especificar el fichero de testing.

---

## Historias de usuario

Como sabemos, un proyecto debe de estar bien especificado, en nuestro caso, dichas especificaciones las haremos en forma de **historia de usuario**. Serán documentadas en issues y a medida que avancemos con el proyecto, se podrán incorporar más.

+ [HU0: Introducción](https://github.com/sergiovp/IV-OrganizeAndGo/issues/5)
+ [HU1: Consultar información](https://github.com/sergiovp/IV-OrganizeAndGo/issues/6)
+ [HU2: Añadir información](https://github.com/sergiovp/IV-OrganizeAndGo/issues/7)

---

## Autor

+ [Sergio Vela Pelegrina](https://github.com/sergiovp).

---

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
