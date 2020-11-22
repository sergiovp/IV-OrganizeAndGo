import { NowRequest, NowResponse } from '@vercel/node';

import { Prioridad, Tarea } from '../app/organizeandgo/tarea';
import { Empleado } from '../app/organizeandgo/empleado';
import { Equipo } from '../app/organizeandgo/equipo';
import { OrganizeAndGo } from '../app/organizeandgo/organizeandgo';

/* Definimos dos empleados */
var empleado1: Empleado = new Empleado(0, "Sergio", "Vela", "sergiovp96@gmail.com");
var empleado2: Empleado = new Empleado(1, "Juan", "Blanco", "juan@gmail.com");

/* Definimos dos tareas */
var tarea1: Tarea = new Tarea(0, false, "Entregar hito 5", "1 semana", Prioridad.Importante, 0);
var tarea2: Tarea = new Tarea(1, false, "Entregar P4 DAI", "4 días", Prioridad.Importante, 0);

/* Array con los dos empleados y array con las dos tareas */
var empleados = [empleado1, empleado2];
var tareas = [tarea1, tarea2];

/* Definimos un equipo */
var equipo: Equipo = new Equipo(0, "Equipo de desarrollo", empleados, tareas);

/* Array de quipos */
var equipos = [equipo];

/* Definimos un objeto de la clase OrganiAndGo */
var obj: OrganizeAndGo = new OrganizeAndGo(equipos);

/* Función serverless */
export default (request: NowRequest, response: NowResponse) => {
    let mostrar;

    // Mostramos un equipo en concreto por su ID
    if (request.query["equipo"]) {
        mostrar = obj.getEquipo(request.query["equipo"]);

        // No hay ningún equipo con ese ID
        if (!mostrar) {
            mostrar = "No hay ningún equipo con el ID seleccionado :("; 
        }

    } else {
        // Mostramos todos los equipos
        mostrar = obj;
    }

    response.status(200).send(mostrar);
}
