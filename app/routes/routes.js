const Router = require('koa-router');
const OrganizeAndGo = require('../organizeandgo/organizeandgo');

const router = new Router();
var controller = new OrganizeAndGo();

/**
 * RUTA INDEX DE PRUEBA
 */
router.get('/', async (ctx) => {
    ctx.status = 200;
	ctx.body = {
    	mensaje: "¡Bienvenido a la API de OrganizeAngGo!"
	};
});

/**
 * CONSULTAR INFORMACIÓN DE LAS TAREAS -> HU1
 * 
 * Se debe especificar el ID del equipo.
 */
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

/**
 * MODIFICAR INFORMACIÓN DE LAS TAREAS -> HU2
 * 
 * Se debe especificar el ID del equipo y el ID de la tarea.
 */
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

/**
 * AÑADIR EQUIPOS -> HU3
 * 
 * Se debe especificar el ID del equipo y el NOMBRE para éste.
 */
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

/**
 * AÑADIR TAREAS -> HU5
 * 
 * Se debe especificar el ID del equipo.
 */
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

/**
 * MODIFICAMOS INFORMACIÓN DE UN EMPLEADO -> HU6
 * 
 * Requiere el ID del equipo y el ID del empleado
 */
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

	if (id_equipo) {
		try {
			for (let i in controller.equipos) {
				if (id_equipo == controller.equipos[i].id) {
					let info = controller.getEquipo(i);
					ctx.status = 200;
			  		ctx.body = info;
				}
			}
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

/**
 * CONSULTAR INFORMACIÓN DE LOS EMPLEADOS DE UN EQUIPO-> HU9
 * 
 * Hay que introducir el ID del equipo sobre el que queremos obtener la información.
 */
router.get('/empleados/:id_equipo', async (ctx) => {
	let id_equipo = ctx.params.id_equipo;
	if (id_equipo) {
		try {
			for (let i in controller.equipos) {
				if (id_equipo == controller.equipos[i].id) {
					let empleados = controller.equipos[i].empleados;

					ctx.status = 200;
					ctx.body = empleados;
				}
			}	
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

module.exports = router;
