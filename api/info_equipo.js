const Equipo = require('../app/organizeandgo/equipo');
const Tarea = require('../app/organizeandgo/tarea');
const Empleado = require('../app/organizeandgo/empleado');
const OrganizeAndGo = require('../app/organizeandgo/organizeandgo');

/* Objetos globales */
var empleado1Equipo1;
var empleado2Equipo1;
var empleado1Equipo2;
var tarea1Equipo1;
var tarea2Equipo1;
var tarea1Equipo2;
var empleadosEquipo1;
var empleadosEquipo2;
var tareasEquipo1;
var tareasEquipo2;
var equipo1;
var equipo2;
var equipos;
var obj;

function initApp() {
    /* Definimos los empleados */
    empleado1Equipo1 = new Empleado(0, "Sergio", "Vela", "sergiovp96@gmail.com");
    empleado2Equipo1 = new Empleado(1, "Juan", "Blanco", "juan@gmail.com");
    empleado1Equipo2 = new Empleado(2, "Noelia", "Sbrn", "sbrn@gmail.com");

    /* Definimos las tareas */
    tarea1Equipo1 = new Tarea(0, false, "Entregar hito 5", "1 semana", "Importante", 0);
    tarea2Equipo1 = new Tarea(1, false, "Entregar P4 DAI", "4 días", "Importante", 0);
    tarea1Equipo2 = new Tarea(2, false, "Estudiar", "1 año", "Importante", 2);

    /* Array con los empleados y las tareas */
    empleadosEquipo1 = [empleado1Equipo1, empleado2Equipo1];
    tareasEquipo1 = [tarea1Equipo1, tarea2Equipo1];
    empleadosEquipo2 = [empleado1Equipo2];
    tareasEquipo2 = [tarea1Equipo2];

    /* Definimos los equipos */
    equipo1 = new Equipo(0, "Equipo de desarrollo", empleadosEquipo1, tareasEquipo1);
    equipo2 = new Equipo(1, "Equipo de RRHH", empleadosEquipo2, tareasEquipo2);

    /* Array de quipos */
    equipos = [equipo1, equipo2];

    /* Definimos un objeto de la clase OrganiAndGo */
    obj = new OrganizeAndGo(equipos);
}

var noParametros = {
    "error": 400,
    "mensaje": "No se ha introducido el parámetro equipo en la petición"
};

var noEquipo = {
    "error": 404,
    "mensaje": "No se ha encontrado ningún equipo con el ID seleccionado, pruebe con otro"
};

/* Función serverless */
export default (request, response) => {
    let mostrar = "";
    initApp();

    // Mostramos un equipo en concreto por su ID
    if (request.query["equipo"]) {
        mostrar = JSON.stringify(obj.getEquipo(Number(request.query["equipo"])));

        // No hay ningún equipo con ese ID. 404
        if (!mostrar) {
            response.status(404).send(JSON.stringify((noEquipo))); 
        }

        // Si hemos llegado aquí, sí que hay un equipo, lo devolvemos éxitosamente
        response.status(200).send(mostrar);

    // No hay parámetros
    } else {
        response.status(400).send(JSON.stringify((noParametros)));
    }
}
