/*import { Equipo } from '../app/organizeandgo/equipo';
import { Tarea, Prioridad } from '../app/organizeandgo/tarea';
import { Empleado } from '../app/organizeandgo/empleado';
import { expect } from 'chai';*/

const Equipo = require('../app/organizeandgo/equipo');
const Tarea = require('../app/organizeandgo/tarea');
const Empleado = require('../app/organizeandgo/empleado');
const expect = require('chai').expect;


describe('Testing clase Equipo: ', () => {
    let empleado1 = new Empleado(1, "Sergio", "Vela", "sergiovp96@gmail.com");
    let empleado2 = new Empleado(2, "Pepito", "Remix", "remix@hotmail.com");
    let empleados = [empleado1, empleado2];

    let tarea1 = new Tarea(1, false, "Terminar los tests", "media hora", "Importante", 1);
    let tarea2 = new Tarea(2, false, "Hacer un commit", "1 segundo", "Poco importante", 2);
    let tareas = [tarea1, tarea2];

    let unEquipo = new Equipo(1, "Equipo de Vela", empleados, tareas);
    
    it ('get id nos debe devolver el id del equipo', () => {
        expect(unEquipo.id).to.equal(1).and.to.be.greaterThan(0);
    });

    it ('get nombre nos debe devolver el nombre del equipo', () => {
        expect(unEquipo.nombre).to.equal("Equipo de Vela");
    });

    it ('get empleados nos debe devolver un array de empleados', () => {
        expect(unEquipo.empleados).to.equal(empleados);
    });

    it ('getEmpleado nos debe devolver un empleado en concreto', () => {
        expect(unEquipo.getEmpleado(0)).to.equal(empleado1);
        expect(unEquipo.getEmpleado(1)).to.equal(empleado2);
    });

    it ('get tareas nos debe devolver un array de tareas', () => {
        expect(unEquipo.tareas).to.equal(tareas);
    });

    it ('getTarea nos debe devolver una tarea en concreto', () => {
        expect(unEquipo.getTarea(0)).to.equal(tarea1);
        expect(unEquipo.getTarea(1)).to.equal(tarea2);
    });
    
    it ('set id debe modificar el id del equipo', () => {
        unEquipo.id = 27;
        expect(unEquipo.id).to.equal(27).and.to.be.greaterThan(0);
    });

    it ('set nombre debe modificar el nombre del equipo', () => {
        unEquipo.nombre = "Equipo de Sergio";
        expect(unEquipo.nombre).to.equal("Equipo de Sergio");
    });

    it ('set empleados debe modificar los empleados del equipo', () => {
        let otroEmpleado = new Empleado(3, "Carmen", "Pele", "carmenpele@yahoo.com");
        unEquipo.empleados = [otroEmpleado];

        expect(unEquipo.getEmpleado(0)).to.equal(otroEmpleado);
        expect(unEquipo.getEmpleado(1)).to.be.undefined;
    });

    it ('setEmpleado debe modificar a un empleado en concreto', () => {
        let nuevoEmpleado = new Empleado(4, "Juan", "Vela", "juanvela@yahoo.com");
        unEquipo.setEmpleado(0, nuevoEmpleado);

        expect(unEquipo.empleados[0]).to.equal(nuevoEmpleado);
    });

    it ('set tareas debe modificar las tareas del equipo', () => {
        let otraTarea = new Tarea(4, false, "Una más", "5s", "Poco importante", 4);
        unEquipo.tareas = [otraTarea];

        expect(unEquipo.getTarea(0)).to.equal(otraTarea);
        expect(unEquipo.getTarea(1)).to.be.undefined;
    });

    it ('setTarea debe modificar a una tarea en concreto', () => {
        let nuevaTarea = new Tarea(5, false, "tarea regalo", "2 min", "Poco importante", 7);
        unEquipo.setTarea(0, nuevaTarea);

        expect(unEquipo.tareas[0]).to.equal(nuevaTarea);
    });

    it ('addEmpleado debe añadir un empleado a la lista de empleados', () => {
        let nuevoEmpleado = new Empleado(4, "Nombre", "Apellido", "correo@yahoo.com");
        let nuevoEmpleado2 = new Empleado(5, "Hola", "Adiós", "hola@yahoo.com");

        unEquipo.addEmpleado(nuevoEmpleado);
        unEquipo.addEmpleado(nuevoEmpleado2);

        expect(unEquipo.empleados[1]).to.equal(nuevoEmpleado);
        expect(unEquipo.empleados[2]).to.equal(nuevoEmpleado2);
    });

    it ('addTarea debe añadir una tarea a la lista de tareas', () => {
        let nuevaTarea = new Tarea(27, false, "unatarea", "1h", "Importante", 7);
        let nuevaTarea2 = new Tarea(70, false, "otratarea", "10h", "Poco importante", 3);

        unEquipo.addTarea(nuevaTarea);
        unEquipo.addTarea(nuevaTarea2);

        expect(unEquipo.tareas[1]).to.equal(nuevaTarea);
        expect(unEquipo.tareas[2]).to.equal(nuevaTarea2);
    });
});
