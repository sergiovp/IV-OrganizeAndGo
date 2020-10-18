import { OrganizeAndGo } from '../app/organizeandgo/organizeandgo';
import { Equipo } from '../app/organizeandgo/equipo';
import { Empleado } from '../app/organizeandgo/empleado';
import { Tarea, Prioridad } from '../app/organizeandgo/tarea';
import { expect } from 'chai';

describe('Testing clase OrganizeAndGo: ', () => {
    let empleado1: Empleado = new Empleado(1, "Sergio", "Vela", "sergiovp96@gmail.com");
    let empleado2: Empleado = new Empleado(2, "Pepito", "Remix", "remix@hotmail.com");
    let empleados1: Array<Empleado> = [empleado1, empleado2];
    let tarea1: Tarea = new Tarea(1, false, "Terminar los tests", "media hora",
    Prioridad.Importante, 1);
    let tarea2: Tarea = new Tarea(2, false, "Hacer un commit", "1 segundo",
    Prioridad.Baja, 2);
    let tareas1: Array<Tarea> = [tarea1, tarea2];

    let equipo1: Equipo = new Equipo(1, "Equipo de Vela", empleados1, tareas1);

    let empleado3: Empleado = new Empleado(3, "Hola", "Adiós", "hola@gmail.com");
    let empleado4: Empleado = new Empleado(4, "José", "Ramírez", "jose@hotmail.com");
    let empleados2: Array<Empleado> = [empleado3, empleado4];
    let tarea3: Tarea = new Tarea(3, false, "another", "media hora",
    Prioridad.Importante, 1);
    let tarea4: Tarea = new Tarea(4, false, "otra más", "1 segundo",
    Prioridad.Baja, 2);
    let tareas2: Array<Tarea> = [tarea3, tarea4];

    let equipo2: Equipo = new Equipo(1, "Equipo de Vela", empleados2, tareas2);

    let equipos: Array<Equipo> = [equipo1, equipo2];

    let objOrganize: OrganizeAndGo = new OrganizeAndGo(equipos);
    
    it ('get equipos nos debe devolver un array de equipos', () => {
        expect(objOrganize.equipos).to.equal(equipos);
    });

    it ('getEquipo nos debe devolver un equipo en concreto', () => {
        expect(objOrganize.equipos[0]).to.equal(equipo1);
        expect(objOrganize.equipos[1]).to.equal(equipo2);
    });

    it ('setEquipos debe modificar a los equipos', () => {
        let empleado1: Empleado = new Empleado(29, "Jefe", "Equipo", "jefe@gmail.com");
        let empleados1: Array<Empleado> = [empleado1];

        let tarea1: Tarea = new Tarea(7, false, "Queda poco", "media hora",
            Prioridad.Importante, 91);
        let tareas1: Array<Tarea> = [tarea1];

        let equipo1: Equipo = new Equipo(7, "Equipo de Vela", empleados1, tareas1);

        let equipos1: Array<Equipo> = [equipo1];

        objOrganize.equipos = equipos1;

        expect(objOrganize.equipos).to.equal(equipos1);
    });

    it ('addEquipo debe introducir un equipo a la lista de equipos', () => {
        let empleado2: Empleado = new Empleado(47, "Empleado", "Equipo", "empleado@gmail.com");
        let empleados2: Array<Empleado> = [empleado2];

        let tarea2: Tarea = new Tarea(12, false, "entregar esto", "media hora",
            Prioridad.Importante, 76);
        let tareas2: Array<Tarea> = [tarea2];

        let equipo1: Equipo = new Equipo(27, "Equipo último", empleados2, tareas2);

        objOrganize.addEquipo(equipo1);

        expect(objOrganize.equipos[1]).to.equal(equipo1);
    });
});