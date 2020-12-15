const Router = require('koa-router');
const OrganizeAndGo = require('../organizeandgo/organizeandgo');

const router = new Router();
var controller = new OrganizeAndGo();


// Función 'index' que da la bienvenida a la API
router.get('/', async (ctx) => {
    ctx.status = 200;
	ctx.body = {
    	mensaje: "¡Bienvenido a la API de OrganizeAngGo!"
	};
});

// Consultar información de las tareas HU1
router.get('/tareas/:id_equipo', async (ctx) => {
	let id_equipo = ctx.params.id_equipo;

	// Devolveremos las tareas del equipo cuyo ID coincida
});

// Modificar información de las tareas HU2

// Añadir equipos HU3 OKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
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

/**
 * AÑADIR EMPLEADOS -> HU4
 * 
 * Se debe especificar el ID del equipo en el que estará el empleado.
 */
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

// Añadir tareas HU5
router.post('/tarea/:id/:terminada/:descripcion/:tiempo/:prioridad/:empleado', async (ctx) => {

	// Añadiremos una tarea
});

/**
 * CONSULTAR INFORMACIÓN DE UN EMPLEADO -> HU6
 * 
 * Hay que introducir el ID del equipo y empleado sobre el que queremos obtener la información.
 */
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

// Modificar información de un empleado HU6
router.put('/empleado/:id_empleado', async (ctx) => {
	let id_empleado = ctx.params.id_empleado;

	// Modificaremos los datos del empleado cuyo ID coincida
});

/**
 * CONSULTAR INFORMACIÓN DEL DESARROLLADOR -> HU7
 * 
 * No requiere ningún parámetro.
 */
router.get('/developer', async (ctx) => {
	ctx.status = 200;
	ctx.body = {
		autor: "Sergio Vela Pelegrina",
		contacto: "sergiovp96@gmail.com",
		repositorio: "https://github.com/sergiovp/IV-OrganizeAndGo",
		github: "https://github.com/sergiovp"
	};
});

/**
 * CONSULTAR INFORMACIÓN DE LOS EQUIPOS -> HU8
 * 
 * Hay que introducir el ID del equipo sobre el que queremos obtener la información.
 */
router.get('/equipo/:id_equipo', async (ctx) => {
	let id_equipo = ctx.params.id_equipo;

	try {
		let info = controller.getEquipo(id_equipo);

		ctx.status = 200;
  		ctx.body = info;
			
	} catch (error) {
		ctx.status = 404;
  		ctx.body = {
    		error: "No se ha encontrado información del equipo"
  		};
	}
});

/**
 * CONSULTAR INFORMACIÓN DE LOS EMPLEADOS DE UN EQUIPO-> HU9
 * 
 * Hay que introducir el ID del equipo sobre el que queremos obtener la información.
 */
router.get('/empleados/:id_equipo', async (ctx) => {
	let id_equipo = ctx.params.id_equipo;

	try {
		let empleados = controller.equipos[id_equipo].empleados;

		ctx.status = 200;
  		ctx.body = empleados;
			
	} catch (error) {
		ctx.status = 404;
  		ctx.body = {
    		error: "No se ha encontrado información del equipo"
  		};
	}
});

module.exports = router;
