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

});

// Modificar información de las tareas HU2

// Añadir equipos HU3

// Añadir empleados HU4

// Añadir tareas HU5

// Consultar información de un empleado HU6
router.get('/empleado/:id_empleado', async (ctx) => {

});

// Modificar información de un empleado HU6

// Consultar información del desarrollador HU7

// Consultar información de todos los equipos HU8
router.get('/equipo/:id_equipo', async (ctx) => {
	let id_equipo = ctx.params.id_equipo;
});

module.exports = router;
