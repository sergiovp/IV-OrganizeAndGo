const expect = require('chai').expect;
const Equipo = require('../app/organizeandgo/equipo');
const Tarea = require('../app/organizeandgo/tarea');
const Empleado = require('../app/organizeandgo/empleado');
const OrganizeAndGo = require('../app/organizeandgo/organizeandgo');

describe('Testing clase OrganizeAndGo: ', () => {
    let controlador = new OrganizeAndGo();
    controlador.addEquipo(1, "Equipillo");

    it ('Comprobamos el constructor', () => {
        expect(controlador).to.be.an('object').and.not.to.empty;
    });

    it ('get equipos nos debe devolver un array de equipos', () => {
        expect(controlador.equipos).to.be.an('array');
    });

    it ('getEquipo nos debe devolver un equipo en concreto', () => {
        expect(controlador.equipos[0]).to.be.an('object');
    });

    it ('setEquipos debe modificar a los equipos', () => {
        let empleado1 = new Empleado(29, "Jefe", "Equipo", "jefe@gmail.com");
        let empleados1 = [empleado1];

        let tarea1 = new Tarea(7, false, "Queda poco", "media hora", "Importante", 91);
        let tareas1 = [tarea1];

        let equipo1 = new Equipo(7, "Equipo de Vela", empleados1, tareas1);

        let equipos1 = [equipo1];

        controlador.equipos = equipos1;

        expect(controlador.equipos).to.equal(equipos1).and.to.be.an('array');
    });

    it ('addEquipo debe introducir un equipo a la lista de equipos', () => {
        controlador.addEquipo(2, "Otro equipo");

        expect(controlador.equipos[1]).to.be.an('object');
    });
});
