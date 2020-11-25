import { NowRequest, NowResponse } from '@vercel/node';
import { Prioridad, Tarea } from '../app/organizeandgo/tarea';
import { Empleado } from '../app/organizeandgo/empleado';
import { Equipo } from '../app/organizeandgo/equipo';
import { OrganizeAndGo } from '../app/organizeandgo/organizeandgo';

/* Objetos globales */
var empleado1Equipo1: Empleado;
var empleado2Equipo1: Empleado;
var empleado1Equipo2: Empleado;
var tarea1Equipo1: Tarea;
var tarea2Equipo1: Tarea;
var tarea1Equipo2: Tarea;
var empleadosEquipo1: Array<Empleado>;
var empleadosEquipo2: Array<Empleado>;
var tareasEquipo1: Array<Tarea>;
var tareasEquipo2: Array<Tarea>;
var equipo1: Equipo;
var equipo2: Equipo;
var equipos: Array<Equipo>;
var obj: OrganizeAndGo;

function initApp() {
    /* Definimos los empleados */
    empleado1Equipo1 = new Empleado(0, "Sergio", "Vela", "sergiovp96@gmail.com");
    empleado2Equipo1 = new Empleado(1, "Juan", "Blanco", "juan@gmail.com");
    empleado1Equipo2 = new Empleado(2, "Noelia", "Sbrn", "sbrn@gmail.com");

    /* Definimos las tareas */
    tarea1Equipo1 = new Tarea(0, false, "Entregar hito 5", "1 semana", Prioridad.Importante, 0);
    tarea2Equipo1 = new Tarea(1, false, "Entregar P4 DAI", "4 días", Prioridad.Importante, 0);
    tarea1Equipo2 = new Tarea(2, false, "Estudiar", "1 año", Prioridad.Importante, 2);

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

/* Función serverless */
export default (request: NowRequest, response: NowResponse) => {
    let mostrar: any;

    initApp();

    // Mostramos un equipo en concreto por su ID
    if (request.query["equipo"]) {
        mostrar = JSON.stringify(obj.getEquipo(Number(request.query["equipo"])));

        // No hay ningún equipo con ese ID
        if (!mostrar) {
            mostrar = "No hay ningún equipo con el ID seleccionado :("; 
        }

    // Mostramos todos los equipos
    } else {
        mostrar = JSON.stringify(obj);
    }

    response.status(200).send(mostrar);
}
