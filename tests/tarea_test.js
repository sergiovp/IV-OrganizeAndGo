const expect = require('chai').expect;
const Tarea = require('../app/organizeandgo/tarea');

describe('Testing clase Tarea: ', () => {
    let unaTarea = new Tarea(7, false, "Entregar el hito 2", "6 horas", "Urgente", 27);

    it ('Comprobamos el constructor', () => {
        expect(unaTarea).to.be.an('object').and.not.empty;
    });
    
    it ('get id nos debe devolver el id de la tarea', () => {
        expect(unaTarea.id).to.equal(7).and.to.be.greaterThan(0).and.to.be.a('number');
    });

    it ('get terminada nos debe devolver si la tarea ha sido terminada', () => {
        expect(unaTarea.terminada).to.be.false.and.to.be.a('boolean');
    });

    it ('get descripcion nos debe devolver la descripción de la tarea', () => {
        expect(unaTarea.descripcion).to.equal("Entregar el hito 2").and.to.be.a('string').and.not.empty;
    });

    it ('get tiempoEstimado nos debe devolver el tiempo estimado de la tarea', () => {
        expect(unaTarea.tiempoEstimado).to.equal("6 horas").and.to.be.a('string').and.not.empty;
    });

    it ('get prioridad nos debe devolver la prioridad de la tarea', () => {
        expect(unaTarea.prioridad).to.equal("Urgente").and.to.be.a('string');
    });

    it ('get empleadoAsignado nos debe devolver el id del empleado asignado', () => {
        expect(unaTarea.empleadoAsignado).to.equal(27).and.to.be.a('number');
    });
    
    it ('set id debe modificar el id de la tarea', () => {
        unaTarea.id = 27;
        expect(unaTarea.id).to.equal(27).and.to.be.greaterThan(0).and.to.be.a('number');
    });

    it ('set terminada debe modificar el valor de terminada', () => {
        unaTarea.terminada = true;
        expect(unaTarea.terminada).to.be.true.and.to.be.a('boolean');
    });

    it ('set descripcion debe modificar la descripción de la tarea', () => {
        unaTarea.descripcion = "Entregar hito 2 y objetivos semana 3";
        expect(unaTarea.descripcion).to.equal("Entregar hito 2 y objetivos semana 3")
            .and.to.be.a('string').and.not.empty;
    });

    it ('set tiempoEstimado debe modificar el tiempo estimado de la tarea', () => {
        unaTarea.tiempoEstimado = "12 horas y media";
        expect(unaTarea.tiempoEstimado).to.equal("12 horas y media").and.to.be.a('string').and.not.empty;
    });

    it ('set prioridad debe modificar la prioridad de la tarea', () => {
        unaTarea.prioridad = "Importante";
        expect(unaTarea.prioridad).to.equal("Importante").and.to.be.a('string');
    });

    it ('set empleadoAsignado debe modificar el id del empleado asignado', () => {
        unaTarea.empleadoAsignado = 7;
        expect(unaTarea.empleadoAsignado).to.equal(7).and.to.be.a('number');
    });
});
