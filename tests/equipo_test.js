const expect = require('chai').expect;
const Equipo = require('../app/organizeandgo/equipo');
const Tarea = require('../app/organizeandgo/tarea');
const Empleado = require('../app/organizeandgo/empleado');

describe('Testing clase Equipo: ', () => {
    let unEquipo = new Equipo(1, "Equipo de Vela");
    unEquipo.addEmpleado(1, "Sergio", "Vela", "sergiovp96@gmail.com");
    unEquipo.addTarea(1, false, "Una tarea", "1 hora", "Difícil", 1);

    it ('Comprobamos el constructor', () => {
        expect(unEquipo).to.be.an('object').and.not.empty;
    });

    it ('get id nos debe devolver el id del equipo', () => {
        expect(unEquipo.id).to.equal(1).and.to.be.greaterThan(0).and.to.be.a('number');
    });

    it ('get nombre nos debe devolver el nombre del equipo', () => {
        expect(unEquipo.nombre).to.equal("Equipo de Vela").and.to.be.a('string');
    });

    it ('get empleados nos debe devolver un array de empleados', () => {
        expect(unEquipo.empleados).to.be.an('array');
    });

    it ('getEmpleado nos debe devolver un empleado en concreto', () => {
        expect(unEquipo.getEmpleado(0)).to.be.an('object');
    });

    it ('get tareas nos debe devolver un array de tareas', () => {
        expect(unEquipo.tareas).to.be.an('array');
    });

    it ('getTarea nos debe devolver una tarea en concreto', () => {
        expect(unEquipo.getTarea(0)).to.be.an('object');
    });

    it ('set id debe modificar el id del equipo', () => {
        unEquipo.id = 27;
        expect(unEquipo.id).to.equal(27).and.to.be.greaterThan(0).and.to.be.a('number');
    });

    it ('set nombre debe modificar el nombre del equipo', () => {
        unEquipo.nombre = "Equipo de Sergio";
        expect(unEquipo.nombre).to.equal("Equipo de Sergio").and.to.be.a('string');
    });

    it ('set empleados debe modificar los empleados del equipo', () => {
        let otroEmpleado = new Empleado(3, "Carmen", "Pele", "carmenpele@yahoo.com");
        unEquipo.empleados = [otroEmpleado];

        expect(unEquipo.getEmpleado(0)).to.equal(otroEmpleado).and.to.be.an('object');
        expect(unEquipo.getEmpleado(1)).to.be.undefined;
    });

    it ('setEmpleado debe modificar a un empleado en concreto', () => {
        let nuevoEmpleado = new Empleado(4, "Juan", "Vela", "juanvela@yahoo.com");
        unEquipo.setEmpleado(0, nuevoEmpleado);

        expect(unEquipo.empleados[0]).to.equal(nuevoEmpleado).and.to.be.an('object');
    });

    it ('set tareas debe modificar las tareas del equipo', () => {
        let otraTarea = new Tarea(4, false, "Una más", "5s", "Poco importante", 4);
        unEquipo.tareas = [otraTarea];

        expect(unEquipo.getTarea(0)).to.equal(otraTarea).and.to.be.an('object');
        expect(unEquipo.getTarea(1)).to.be.undefined;
    });

    it ('setTarea debe modificar a una tarea en concreto', () => {
        let nuevaTarea = new Tarea(5, false, "tarea regalo", "2 min", "Poco importante", 7);
        unEquipo.setTarea(0, nuevaTarea);

        expect(unEquipo.tareas[0]).to.equal(nuevaTarea).and.to.be.an('object');
    });

    it ('addEmpleado debe añadir un empleado a la lista de empleados', () => {
        unEquipo.addEmpleado(2, "Pepe", "Pepe", "pepe@gmail.com");

        expect(unEquipo.empleados[1]).to.be.an('object');
    });

    it ('addTarea debe añadir una tarea a la lista de tareas', () => {
        unEquipo.addTarea(2, false, "Otra tarea", "1 minuto", "Baja", 2);

        expect(unEquipo.tareas[1]).to.be.an('object');
    });
});
