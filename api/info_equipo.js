const OrganizeAndGo = require('../app/organizeandgo/organizeandgo');

/* Objeto global */
var controlador = new OrganizeAndGo();

function initApp() {
    /* Añadimos dos equipos */
    controlador.addEquipo(0, "Equipo de desarrollo");
    controlador.addEquipo(1, "Equipo de RRHH");

    /* Añadimos dos empleados al equipo 1 y un empleado al equipo 2 */
    controlador.equipos[0].addEmpleado(0, "Sergio", "Vela", "sergiovp96@gmail.com");
    controlador.equipos[0].addEmpleado(1, "Juan", "Blanco", "juan@gmail.com");
    controlador.equipos[1].addEmpleado(2, "Noelia", "Sbrn", "sbrn@gmail.com");

    /* Añadimos dos tareas al equipo 1 y una al equipo 2 */
    controlador.equipos[0].addTarea(0, false, "Entregar hito 5", "1 semana", "Importante", 0);
    controlador.equipos[0].addTarea(1, false, "Entregar P4 DAI", "4 días", "Importante", 0);
    controlador.equipos[1].addTarea(2, false, "Estudiar", "1 año", "Importante", 2);
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
        mostrar = JSON.stringify(controlador.getEquipo(Number(request.query["equipo"])));

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
