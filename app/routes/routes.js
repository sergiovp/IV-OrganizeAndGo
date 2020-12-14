var Router = require('koa-router');

const router = new Router();

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

// Añadir equipos HU3

// Añadir empleados HU4

// Añadir tareas HU5
router.post('/tarea/:id/:terminada/:descripcion/:tiempo/:prioridad/:empleado', async (ctx) => {

	// Añadiremos una tarea
});

// Consultar información de un empleado HU6
router.get('/empleado/:id_empleado', async (ctx) => {
	let id_empleado = ctx.params.id_empleado;

	// Devolveremos los datos del empleado cuyo ID coincida
});

// Modificar información de un empleado HU6
router.put('/empleado/:id_empleado', async (ctx) => {
	let id_empleado = ctx.params.id_empleado;

	// Modificaremos los datos del empleado cuyo ID coincida
});

// Consultar información del desarrollador HU7
router.get('/developer', async (ctx) => {
	ctx.status = 200;
	ctx.body = {
		autor: "Sergio Vela Pelegrina",
		contacto: "sergiovp96@gmail.com",
		repositorio: "https://github.com/sergiovp/IV-OrganizeAndGo",
		github: "https://github.com/sergiovp"
	};
});

// Consultar información de todos los equipos HU8
router.get('/equipo/:id_equipo', async (ctx) => {
	let id_equipo = ctx.params.id_equipo;
});

module.exports = router;
