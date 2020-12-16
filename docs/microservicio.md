## Sexto hito: Diseño y test de un microservicio.

### Justificación técnica del framework elegido para el microservicio con documentación sobre cómo se usa en la práctica.

#### Justificación técnica del framework elegido para el microservicio

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

Para este caso, nos centraremos en cuatro parámetros, que son los más importantes a la hora de decidirnos por un framework u otro, dichos parámetros serán:

+ Peticiones por segundo. (Resultado de dividir el número de peticiones por el tiempo total)
+ Tiempo por petición. (Tiempo medio para cada petición)
+ Tiempo por petición concurrente. (Tiempo medio para cada conjunto de peticiones concurrentes)
+ Tiempo de conexión medio. La media de la suma del tiempo de establecer cada conexión más el tiempo en procesarla)

Lógicamente, deberemos de tener levantada la pequeña app para poder realizarle las peticiones. Para ello, he implementado un 'Hola Mundo' haciendo uso de los distintos frameworks (express, hapi, restify y koa) obteniendo los siguientes resultados:

|  | Express | Koa | Restify | Hapi |
| -- | -- | -- | -- | -- |
| Peticiones por segundo | 1726.00 | 2822.18 | 2208.09 | 2009.12 |
| Tiempo por petición (ms) | 0.579 | 0.354 | 0.453 | 0.498 |
| Tiempo por petición concurrente (ms) | 57.937 | 35.434 | 45.288 | 49.773 |
| Tiempo de conexión (ms) | 55 | 31 | 41  | 41 |

Como podemos apreciar, el framework con mejores resultados ha sido Koa, ya que es el que más peticiones por segundo soporta y el que menor tiempo por petición, peticiones concurrentes y conexión tiene. Seguido por Restify, que está casi empatado con Hapi y por último, Express. Llegados a este punto, quedan descartados *Express* y *Hapy*.

La decisión entre *Koa* y *Restify* es algo tediosa, ya que ambos son microframeworks que cumplen a la perfección nuestras espectativas para la realización de la API REST, pero finalmente me deparo por **Koa** ya que como hemos visto en las gráficas, es un framework que está empezando a coger fuerza con respecto a sus competidores, el número de descargas va en aumento. Por otro lado, es indiscutible que los resultados de ejecutar el benchmark son favorables para dicho framework.

Estos son los motivos por los cuales, utilizaremos **KOA**.

#### Documentación sobre cómo se usa en la práctica el framework elegido.

Koa como hemos comentado es un framework bastante popular, por lo que dispone de una amplia comunidad con todo tipo de preguntas resueltas, así como tutoriales de uso.

Para abordar el hito, he seguido la [documentación oficial](https://koajs.com) así como una serie de tutoriales que podemos ver en los siguientes enlaces:

+ [https://www.tutorialspoint.com/koajs/koajs_restful_apis.htm](https://www.tutorialspoint.com/koajs/koajs_restful_apis.htm)
+ [https://mherman.org/blog/building-a-restful-api-with-koa-and-postgres/](https://mherman.org/blog/building-a-restful-api-with-koa-and-postgres/)
+ [https://www.npmjs.com/package/koa](https://www.npmjs.com/package/koa)
+ [https://github.com/koajs/koa/blob/master/docs/error-handling.md](https://github.com/koajs/koa/blob/master/docs/error-handling.md)
+ [https://github.com/koajs/router](https://github.com/koajs/router)

La verdad es que con este framework se puede trabajar de manera muy cómoda ya que es muy intuitivo.

Para empezar, deberemos crear una instancia de KOA `const app = new Koa();` tras lo cual podemos especificar mediante la función `use` las bibliotecas y/o middlewares implementados. En mi caso, como bibliotecas usaré `app.use(bodyParser());` para leer los parámetros POSTs. Especificaré también el fichero en el que tengo las rutas con `app.use(router.routes());` (se debe crear una instancia de rutas `const router = require('./routes/routes');`) y también implementaré dos funciones *middleware* asíncronas para los logs y gestión de errores.

~~~
/**
 * MIDDLEWARE PARA ERRORES
 */
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
            Error: err.message
        };
    }
})

/**
 * MIDDLEWARE PARA LOS LOGS
 */
app.use(async (ctx, next) => {
    console.log(`${ctx.method} ${ctx.url} ${new Date()}`);
    return await next();
});
~~~

Para iniciar la API, deberemos tener una función semenjante a la siguiente:
~~~
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});
~~~

En la cual especificamos el puerto, en mi caso, es el *2727* y está especificado de la siguiente forma `const PORT = process.env.PORT || 2727;`. Se da la posibilidad de que el puerto se especifique como variable de entorno.

En cuanto a las rutas, he utilizado [koa-router](https://github.com/ZijianHe/koa-router). Deberemos incluir el módulo y crear una instancia `const router = new Router();`.

Una ruta a modo de ejemplo podría ser la siguiente:
~~~
router.get('/', async (ctx) => {
    ctx.status = 200;
	ctx.body = {
    	mensaje: "¡Bienvenido a la API de OrganizeAngGo!"
	};
});
~~~

Como vemos, al hacer una petición GET a la url `localhost:2727` se nos devolverá es mensaje especificado.

Los verbos para la petición pueden ser *GET*, *POST*, *PUT*, *DELETE*...

En nuestro caso, siguiendo nuestras historias de usuario hemos tenido que implemntar funciones *GET*, *POST* y *PUT*.

Se pueden especificar parámetros de la siguiente forma:
~~~
router.get('/tareas/:id_equipo', async (ctx) => {

)};
~~~

Al tratarse de una petición GET, al parámetro id_equipo podremos acceder de la siguiente forma `ctx.params.id_equipo`. En el caso de los parámetros enviados con POST o PUT, accederemos así `ctx.request.body.id_equipo`.

Como hemos visto en la ruta de ejemplo, resulta muy cómodo gestionar los estados de la peticiones, pudiendo especificar el que más nos convenga según el caso, (200, 400, 404...). en `ctx.body` podemos especificar qué devolver tras realizar la petición a la función. Por último, exportaremos las rutas `module.exports = router;` para que puedan ser leídas en el fichero `index`.

### Diseño en general del API, las rutas (o tareas), tipos devueltos por las peticiones y estados devueltos por las mismas, tests y documentación de todo, justificando como se ajustan a las historias de usuario, de forma que reflejen correctamente un diseño por capas que desacopla la lógica de negocio del API

#### Diseño por capas

Al no disponer aún de una base de datos, tenemos un objeto 'controlador' en nuestro fichero de rutas [routes.js](https://github.com/sergiovp/IV-OrganizeAndGo/blob/master/app/routes/routes.js) que encontramos en el directorio [app/routes](https://github.com/sergiovp/IV-OrganizeAndGo/tree/master/app/routes) llamado `controller` que no es más que una instancia de la clase OrganizeAndGo `var controller = new OrganizeAndGo();`. Con dicho objeto, gestionamos los datos de nuestra aplicación, de forma que tenemos un diseño por caps desacoplando la lógica de necio de la API implementada. 

#### Diseño en general del API, las rutas (o tareas), tipos devueltos por las peticiones y estados devueltos por las mismas, tests y documentación de todo, justificando como se ajustan a las historias de usuario

#### [HU3: Añadir equipos](https://github.com/sergiovp/IV-OrganizeAndGo/issues/32)

~~~
router.post('/equipo', async (ctx) => {
	let id_equipo = ctx.request.body.id_equipo;
	let nombre = ctx.request.body.nombre;
	
	if (id_equipo && nombre) {
		try {
			controller.addEquipo(id_equipo, nombre);
			
			ctx.status = 202;
  			ctx.body = {
    			id_equipo: id_equipo,
    			nombre: nombre
  			};
		} catch (error) {
			ctx.status = 404;
  			ctx.body = {
    			error: "No se ha podido añadir el equipo"
  			};
		}
	} else {
		ctx.status = 400;
  		ctx.body = {
    		error: "No se han introducido los parámetros id_equipo y nombre"
  		};
	}
});
~~~

Como vemos en esta HU, un usuario de la aplicación debe tener la posibilidad de añadir un equipo. El verbo de la petición, por tanto, será **POST** y deberemos recibir los parámetros necesarios para crear dicho equipo (un ID y el nombre). En caso de no especificar parámetros, el status de la petición será 400 y especificaremos un mensaje de error informando sobre el error en cuestión (no se han introducido los parámetros correctos).

En caso de introducir los parámetros correctos, llamaremos a la función para añadir equipo de nuestra clase controladora. En caso de éxito, devolveremos el status 202 (aceptado) y devolviendo los datos del equipo recientemente creado. En caso de error, devolveremos un estado 404 especificando que no se ha podido añadir el equipo.

Ejemplo de petición:
~~~
vela@vela-PC:~$ http POST localhost:2727/equipo id_equipo=1 nombre="Mi primer equipo"
HTTP/1.1 202 Accepted
Connection: keep-alive
Content-Length: 45
Content-Type: application/json; charset=utf-8
Date: Wed, 16 Dec 2020 18:18:10 GMT
Keep-Alive: timeout=5

{
    "id_equipo": "1",
    "nombre": "Mi primer equipo"
}
~~~

#### [HU4: Añadir empleados](https://github.com/sergiovp/IV-OrganizeAndGo/issues/33)

~~~
router.post('/empleado', async (ctx) => {
	let id_equipo = ctx.request.body.id_equipo;
	let id_empleado = ctx.request.body.id_empleado;
	let nombre = ctx.request.body.nombre;
	let apellido = ctx.request.body.apellido;
	let email = ctx.request.body.email;

	if (id_equipo && id_empleado && nombre && apellido && email) {
		for (let i in controller.equipos) {
			if (id_equipo == controller.equipos[i].id) {
				try {
					controller.equipos[i].addEmpleado(id_empleado, nombre, apellido, email);

					ctx.status = 202;
  					ctx.body = {
    					id_empleado: id_empleado,
						nombre: nombre,
						apellido: apellido,
						email: email
					};

				} catch (error) {
					ctx.status = 404;
  					ctx.body = {
    					error: "No se ha podido añadir el empleado"
  					};
				}
			}
		}
	} else {
		ctx.status = 400;
  		ctx.body = {
    		error: "No se han introducido los parámetros correctos"
  		};
	}
});
~~~

Al igual que en el caso anterior, al tratarse de añadir un empleado, el verbo de la petición es **POST**. También devolveremos una respuesta cuyo estado es 400 si no se introducen los parámetros correctos. Dichos parámetros serán el ID del equipo en cuestión en el que estará el empleado y los datos de dicho empleado.

Como vemos en la función, buscamos el equipo en cuestión por su ID e intentamos introducir el empleado llamando al método `addEmpleado` de nuestra clase Equipo. En caso de éxito, devolveremos un estado 202 devolviendo los datos del empleado añadido. En caso de error, devolveremos un estado 404 especificando que no se ha podido introducir el empleado.

Ejemplo de petición:
~~~
vela@vela-PC:~$ http POST localhost:2727/empleado id_equipo=1 id_empleado=1 nombre=Sergio apellido=Vela email=sergiovp96@gmail.com
HTTP/1.1 202 Accepted
Connection: keep-alive
Content-Length: 86
Content-Type: application/json; charset=utf-8
Date: Wed, 16 Dec 2020 18:21:44 GMT
Keep-Alive: timeout=5

{
    "apellido": "Vela",
    "email": "sergiovp96@gmail.com",
    "id_empleado": "1",
    "nombre": "Sergio"
}
~~~

#### [HU6: Consultar información de un empleado](https://github.com/sergiovp/IV-OrganizeAndGo/issues/66)

~~~
router.get('/empleado/:id_equipo/:id_empleado', async (ctx) => {
	let id_equipo = ctx.params.id_equipo;
	let id_empleado = ctx.params.id_empleado;

	if (id_equipo && id_empleado) {
		for (let i in controller.equipos) {
			if (id_equipo == controller.equipos[i].id) {
				for (let j in controller.equipos[i].empleados) {
					if (id_empleado == controller.equipos[i].empleados[j].id) {
						try {
							let infoEmpleado = controller.equipos[i].getEmpleado(j);
							ctx.status = 200;
							ctx.body = infoEmpleado;

						} catch (error) {
							ctx.status = 404;
  							ctx.body = {
    							error: "No se ha podido consultar la información del empleado"
  							};
						}
					}
				}
			}
		}

	} else {
		ctx.status = 400;
  		ctx.body = {
    		error: "No se han introducido los parámetros correctos"
  		};
	}
});
~~~

En este caso, al querer consultar información, el verbo de la petición será GET. Los parámetros neesarios serán el ID del equipo en el que está el empleado y el propio ID del empleado. En caso de no introducir parámetros, devolveremos un estado 400 especificando que no se hna introducido los parámetros, en otro caso, intentamos leer los datos del empleado haciendo uso de la función `getEmpleado`. En caso de éxito, se devolverán dichos datos con un estado 200. En otro caso, devolveremos un estado 404 especificando que no se han podido obtener los datos.

Ejemplo de petición:
~~~
vela@vela-PC:~$ http GET localhost:2727/empleado/1/1
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 81
Content-Type: application/json; charset=utf-8
Date: Wed, 16 Dec 2020 18:36:49 GMT
Keep-Alive: timeout=5

{
    "_apellido": "Vela",
    "_email": "sergiovp96@gmail.com",
    "_id": "1",
    "_nombre": "Sergio"
}
~~~

#### [HU9 Consultar la información de todos los empleados de un equipo](https://github.com/sergiovp/IV-OrganizeAndGo/issues/76)

~~~
router.get('/empleados/:id_equipo', async (ctx) => {
	let id_equipo = ctx.params.id_equipo;
	if (id_equipo) {
		try {
			id_equipo -= 1;
			let empleados = controller.equipos[id_equipo].empleados;
	
			ctx.status = 200;
			  ctx.body = empleados;
				
		} catch (error) {
			ctx.status = 404;
			  ctx.body = {
				error: "No se ha encontrado información de los empleados"
			  };
		}
	} else {
		ctx.status = 400;
  		ctx.body = {
    		error: "No se han introducido los parámetros correctos"
  		};
	}
});
~~~

Ruta con verbo **GET** puesto que queremos recibir la información que solicitamos. Como parámetro, especificamos el ID del equipo. En caso de no introducirlo, devolvemos un estado 400 e información al suaurio. En caso de éxito, devolvemos la información con un estado 200, en caso contrario, un 404 con información.

Ejemplo de petición (se ha añadido otro empleado más):
~~~
vela@vela-PC:~$ http GET localhost:2727/empleados/1
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 158
Content-Type: application/json; charset=utf-8
Date: Wed, 16 Dec 2020 19:04:19 GMT
Keep-Alive: timeout=5

[
    {
        "_apellido": "Vela",
        "_email": "sergiovp96@gmail.com",
        "_id": "1",
        "_nombre": "Sergio"
    },
    {
        "_apellido": "SBRN",
        "_email": "noe@gmail.com",
        "_id": "2",
        "_nombre": "Noelia"
    }
]
~~~

#### [HU6: Modificar información de un empleado](https://github.com/sergiovp/IV-OrganizeAndGo/issues/66)

~~~
router.put('/empleado', async (ctx) => {
	let id_equipo = ctx.request.body.id_equipo;
	let id_empleado = ctx.request.body.id_empleado;
	let nuevoID = ctx.request.body.nuevo_id;
	let nuevoNombre = ctx.request.body.nombre;
	let nuevoApellido = ctx.request.body.apellido;
	let nuevoEmail = ctx.request.body.email;

	if (id_equipo && id_empleado) {
		for (let i in controller.equipos) {
			if (id_equipo == controller.equipos[i].id) {
				for (let j in controller.equipos[i].empleados) {
					if (id_empleado == controller.equipos[i].empleados[j].id) {
						try {
							if (nuevoID) {
								controller.equipos[i].empleados[j].id = nuevoID;
							}
							if (nuevoNombre) {
								controller.equipos[i].empleados[j].nombre = nuevoNombre;
							}
							if (nuevoApellido) {
								controller.equipos[i].empleados[j].apellido = nuevoApellido;
							}
							if (nuevoEmail) {
								controller.equipos[i].empleados[j].email = nuevoEmail;
							}

							ctx.status = 202;
							ctx.body = {
								id: controller.equipos[i].empleados[j].id,
								terminada: controller.equipos[i].empleados[j].nombre,
								descripcion: controller.equipos[i].empleados[j].apellido,
								tiempoEstimado: controller.equipos[i].empleados[j].email
							};

						} catch (error) {
							ctx.status = 404;
  							ctx.body = {
    							error: "No se ha podido modificar la información de la tarea"
  							};
						}
					}
				}
			}
		}
	} else {
		ctx.status = 400;
  		ctx.body = {
    		error: "No se han introducido los parámetros correctos"
  		};
	}
});
~~~

En este caso, el verbo es **PUT** al tratarse de una petición para modificar datos. Los parámetros necesarios son el ID del equipo y el ID del empleado. Si no se introducen dichos parámetros, se devolverá un estado 400 avisando al usuario. Los parámetros opcionales son los datos a modificar del usuario. Se comprueban qué atributos a modificar se han introducido y se intentan modificar, en caso de éxito devolvemos los datos del suaurio con un estado 200, en caso contrario, devolvemos un estado 404 y especificamos que no hemos podido modificar el usuario.

Ejemplo de petición (modificaremos el email del primer empleado creado):
~~~
vela@vela-PC:~$ http PUT localhost:2727/empleado id_equipo=1 id_empleado=1 email=correoNuevo@gmail.com
HTTP/1.1 202 Accepted
Connection: keep-alive
Content-Length: 93
Content-Type: application/json; charset=utf-8
Date: Wed, 16 Dec 2020 18:41:28 GMT
Keep-Alive: timeout=5

{
    "descripcion": "Vela",
    "id": "1",
    "terminada": "Sergio",
    "tiempoEstimado": "correoNuevo@gmail.com"
}

vela@vela-PC:~$ http GET localhost:2727/empleado/1/1
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 82
Content-Type: application/json; charset=utf-8
Date: Wed, 16 Dec 2020 18:41:31 GMT
Keep-Alive: timeout=5

{
    "_apellido": "Vela",
    "_email": "correoNuevo@gmail.com",
    "_id": "1",
    "_nombre": "Sergio"
}
~~~

Como se puede ver, también he pegado de nuevo la respuesta a la petición para obtener la información del empleado para asegurarnos que el correo ha sido modificado.

#### [HU5: Añadir tareas](https://github.com/sergiovp/IV-OrganizeAndGo/issues/34)

~~~
router.post('/tarea', async (ctx) => {
	let id_equipo = ctx.request.body.id_equipo;
	let id_tarea = ctx.request.body.id_tarea;
	let terminada = ctx.request.body.terminada;
	let descripcion = ctx.request.body.descripcion;
	let tiempoEstimado = ctx.request.body.tiempo_estimado;
	let prioridad = ctx.request.body.prioridad;
	let empleadoAsignado = ctx.request.body.empleado_asignado;

	if (id_equipo && id_tarea && terminada && descripcion &&
		tiempoEstimado && prioridad && empleadoAsignado) {
			for (let i in controller.equipos) {
				if (id_equipo == controller.equipos[i].id) {
					try {
						controller.equipos[i].addTarea(id_tarea, terminada, descripcion,
							tiempoEstimado, prioridad, empleadoAsignado);
	
						ctx.status = 202;
						  ctx.body = {
							id_tarea: id_tarea,
							terminada: terminada,
							descripcion: descripcion,
							tiempoEstimado: tiempoEstimado,
							prioridad: prioridad,
							empleadoAsignado: empleadoAsignado
						};
	
					} catch (error) {
						ctx.status = 404;
						  ctx.body = {
							error: "No se ha podido añadir la tarea"
						  };
					}
				}
			}
	} else {
		ctx.status = 400;
  		ctx.body = {
    		error: "No se han introducido los parámetros correctos"
  		};
	}
});
~~~

Otro caso de función **POST** en este caso para añadir tareas. Si no se introducen los parámetros correctos, devolvemos un estado 400 y avisamos al usuario. Los parámetros necesarios son el ID del equipo al que irá asociada la tarea y los propios atributos de la tarea. En caso de éxito, añadimos la tarea con el método `addTarea` de la clase Equipo y devolvemos un estado 202 con los atributos de la tarea creada. En caso de error, devolvemos un estado 404 y especificamos que no se ha podido añadir la tarea.

Ejemplo de petición:
~~~
vela@vela-PC:~$ http POST localhost:2727/tarea id_equipo=1 id_tarea=1 terminada=false descripcion="Entregar la práctica" tiempo_estimado="1 hora" prioridad=Importante empleado_asignado=1
HTTP/1.1 202 Accepted
Connection: keep-alive
Content-Length: 148
Content-Type: application/json; charset=utf-8
Date: Wed, 16 Dec 2020 18:32:00 GMT
Keep-Alive: timeout=5

{
    "descripcion": "Entregar la práctica",
    "empleadoAsignado": "1",
    "id_tarea": "1",
    "prioridad": "Importante",
    "terminada": "false",
    "tiempoEstimado": "1 hora"
}
~~~

#### [HU1: Consultar información de las tareas](https://github.com/sergiovp/IV-OrganizeAndGo/issues/6)

~~~
router.get('/tareas/:id_equipo', async (ctx) => {
	let id_equipo = ctx.params.id_equipo;

	if (id_equipo) {
		for (let i in controller.equipos) {
			if (id_equipo == controller.equipos[i].id) {
				try {
					let tareas = controller.equipos[i].tareas;

					ctx.status = 200;
					ctx.body = tareas;
				} catch (error) {
					ctx.status = 404;
					ctx.body = {
					  error: "No se han podido obtener las tareas"
					};
				}
			}
		}
	} else {
		ctx.status = 400;
  		ctx.body = {
    		error: "No se han introducido los parámetros correctos"
  		};
	}
});
~~~

El parámetro requerido es el ID del equipo sobre el que queremos saber las tareas. En caso de no incluirlo, devolveremos un estado de error 400 e informamos al usuario. En caso de éxito, devolvemos toda la información relativa de las tareas con un estado 200. En caso contrario, devolvemos un 404 indicando que nos hemos podido obtener la información.

Ejemplo de petición (He añadido otra tarea más):
~~~
vela@vela-PC:~$ http GET localhost:2727/tareas/1
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 321
Content-Type: application/json; charset=utf-8
Date: Wed, 16 Dec 2020 18:48:29 GMT
Keep-Alive: timeout=5

[
    {
        "_descripcion": "Entregar la práctica",
        "_empleadoAsignado": "1",
        "_id": "1",
        "_prioridad": "Importante",
        "_terminada": "false",
        "_tiempoEstimado": "1 hora"
    },
    {
        "_descripcion": "Ponerme con el tfg de una vez por todas",
        "_empleadoAsignado": "1",
        "_id": "2",
        "_prioridad": "Importante",
        "_terminada": "false",
        "_tiempoEstimado": "medio año"
    }
]
~~~

#### [HU2: Modificar información de las tareas](https://github.com/sergiovp/IV-OrganizeAndGo/issues/7)

~~~
router.put('/tarea', async (ctx) => {
	let id_equipo = ctx.request.body.id_equipo;
	let id_tarea = ctx.request.body.id_tarea;
	let nuevoID = ctx.request.body.nuevo_id;
	let nuevaTerminada = ctx.request.body.terminada;
	let nuevaDescripcion = ctx.request.body.descripcion;
	let nuevoTiempoEstimado = ctx.request.body.tiempo_estimado;
	let nuevaPrioridad = ctx.request.body.prioridad;
	let nuevoEmpleadoAsignado = ctx.request.body.empleado_asignado;

	if (id_equipo && id_tarea) {
		for (let i in controller.equipos) {
			if (id_equipo == controller.equipos[i].id) {
				for (let j in controller.equipos[i].tareas) {
					if (id_tarea == controller.equipos[i].tareas[j].id) {
						try {
							if (nuevoID) {
								controller.equipos[i].tareas[j].id = nuevoID;
							}
							if (nuevaTerminada) {
								controller.equipos[i].tareas[j].terminada = nuevaTerminada;
							}
							if (nuevaDescripcion) {
								controller.equipos[i].tareas[j].descripcion = nuevaDescripcion;
							}
							if (nuevoTiempoEstimado) {
								controller.equipos[i].tareas[j].tiempoEstimado = nuevoTiempoEstimado;
							}
							if (nuevaPrioridad) {
								controller.equipos[i].tareas[j].prioridad = nuevaPrioridad;
							}
							if (nuevoEmpleadoAsignado) {
								controller.equipos[i].tareas[j].empleadoAsignado = nuevoEmpleadoAsignado;
							}

							ctx.status = 202;
							ctx.body = {
								id: controller.equipos[i].tareas[j].id,
								terminada: controller.equipos[i].tareas[j].terminada,
								descripcion: controller.equipos[i].tareas[j].descripcion,
								tiempoEstimado: controller.equipos[i].tareas[j].tiempoEstimado,
								prioridad: controller.equipos[i].tareas[j].prioridad,
								empleadoAsignado: controller.equipos[i].tareas[j].empleadoAsignado
							};

						} catch (error) {
							ctx.status = 404;
  							ctx.body = {
    							error: "No se ha podido modificar la información de la tarea"
  							};
						}
					}
				}
			}
		}
	} else {
		ctx.status = 400;
  		ctx.body = {
    		error: "No se han introducido los parámetros correctos"
  		};
	}
});
~~~

Al igual que la ruta para modificar un empleado, el verbo utilizado es **PUT** y se requiren los parámetros ID del equipo e ID de la tarea a modificar.
En caso de no introducir los parámetros correctos, devolvemos 400 y junto con información al usuario. En otro caso, si se han introducido parámetros para modificar de la tarea, se intentan modificar. En caso de éxito, devolvemos un 202 con la nueva información, en caso contrario, un 404 especificando que la información no ha podido ser modificada.

Ejemplo de uso (modificamos la prioridad y tiempo estimado de la segunda tarea creada):
~~~
vela@vela-PC:~$ http PUT localhost:2727/tarea id_equipo=1 id_tarea=2 tiempo_estimado="1 mes" descripcion="Realizar la documentación del TFG"
HTTP/1.1 202 Accepted
Connection: keep-alive
Content-Length: 154
Content-Type: application/json; charset=utf-8
Date: Wed, 16 Dec 2020 18:54:44 GMT
Keep-Alive: timeout=5

{
    "descripcion": "Realizar la documentación del TFG",
    "empleadoAsignado": "1",
    "id": "2",
    "prioridad": "Importante",
    "terminada": "false",
    "tiempoEstimado": "1 mes"
}

vela@vela-PC:~$ http GET localhost:2727/tareas/1
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 311
Content-Type: application/json; charset=utf-8
Date: Wed, 16 Dec 2020 18:54:50 GMT
Keep-Alive: timeout=5

[
    {
        "_descripcion": "Entregar la práctica",
        "_empleadoAsignado": "1",
        "_id": "1",
        "_prioridad": "Importante",
        "_terminada": "false",
        "_tiempoEstimado": "1 hora"
    },
    {
        "_descripcion": "Realizar la documentación del TFG",
        "_empleadoAsignado": "1",
        "_id": "2",
        "_prioridad": "Importante",
        "_terminada": "false",
        "_tiempoEstimado": "1 mes"
    }
]
~~~

#### [HU8: Como usuario de la aplicación me gustaría saber toda la información relativa a los equipos de la empresa.](https://github.com/sergiovp/IV-OrganizeAndGo/issues/72)

~~~
router.get('/equipo/:id_equipo', async (ctx) => {
	let id_equipo = ctx.params.id_equipo;

	if (id_equipo) {
		try {
			id_equipo -= 1;
			let info = controller.getEquipo(id_equipo);
	
			ctx.status = 200;
			  ctx.body = info;
				
		} catch (error) {
			ctx.status = 404;
			  ctx.body = {
				error: "No se ha encontrado información del equipo"
			  };
		}
	} else {
		ctx.status = 400;
		ctx.body = {
		  error: "No se han introducido los parámetros correctos"
		};
	}
	
});
~~~

En este caso, queremos consultar información, por lo que el verbo de la petición es **GET**. Como parámetros, recibimos el ID del equipo en cuestión sobre el que queremos obtener la información. En caso de éxito, devolveremos toda la información del equipo junto con un estado 200, en caso contrario, un error 404 especificando que no se ha podido mostrar la información. Si no introducimos ningún parámetros, devolvemos 400 e información sobre el error.

Ejemplo de petición (consultamos la información del equipo creado al principio):
~~~
vela@vela-PC:~$ http GET localhost:2727/equipo/1
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 535
Content-Type: application/json; charset=utf-8
Date: Wed, 16 Dec 2020 19:07:19 GMT
Keep-Alive: timeout=5

{
    "_empleados": [
        {
            "_apellido": "Vela",
            "_email": "correoNuevo@gmail.com",
            "_id": "1",
            "_nombre": "Sergio"
        },
        {
            "_apellido": "SBRN",
            "_email": "noe@gmail.com",
            "_id": "2",
            "_nombre": "Noelia"
        }
    ],
    "_id": "1",
    "_nombre": "Mi primer equipo",
    "_tareas": [
        {
            "_descripcion": "Entregar la práctica",
            "_empleadoAsignado": "1",
            "_id": "1",
            "_prioridad": "Importante",
            "_terminada": "false",
            "_tiempoEstimado": "1 hora"
        },
        {
            "_descripcion": "Realizar la documentación del TFG",
            "_empleadoAsignado": "1",
            "_id": "2",
            "_prioridad": "Importante",
            "_terminada": "false",
            "_tiempoEstimado": "1 mes"
        }
    ]
}
~~~

~~~
{
    "Error": "Cannot read property 'id_equipo' of undefined"
}

~~~