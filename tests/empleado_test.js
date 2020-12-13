const expect = require('chai').expect;
const Empleado = require('../app/organizeandgo/empleado');

describe('Testing clase Empleado: ', () => {
    let unEmpleado = new Empleado(7, "Sergio", "Vela", "sergiovp96@gmail.com");

    it ('Comprobamos el constructor', () => {
        expect(unEmpleado).to.be.an('object').and.not.empty;
    });

    it ('get id nos debe devolver el id asignado al empleado', () => {
        expect(unEmpleado.id).to.equal(7).and.to.be.greaterThan(0).and.to.be.a('number');
    });

    it ('get nombre nos debe devolver el nombre del empleado', () => {
        expect(unEmpleado.nombre).to.equal("Sergio").and.to.be.a('string').and.not.empty;
    });

    it ('get apellido nos debe devolver el apellido del empleado', () => {
        expect(unEmpleado.apellido).to.equal("Vela").and.to.be.a('string').and.not.empty;
    });

    it ('get email nos debe devolver el email del empleado', () => {
        expect(unEmpleado.email).to.equal("sergiovp96@gmail.com").and.to.be.a('string').and.not.empty;
    });

    it ('set id debe modificar el id del empleado', () => {
        unEmpleado.id = 27;
        expect(unEmpleado.id).to.equal(27).and.to.be.greaterThan(0).and.to.be.a('number');
    });

    it ('set nombre debe modificar el nombre del empleado', () => {
        unEmpleado.nombre = "Sergito";
        expect(unEmpleado.nombre).to.equal("Sergito").and.to.be.a('string').and.not.empty;
    });

    it ('set apellido debe modificar el apellido del empleado', () => {
        unEmpleado.apellido = "Pelegrina";
        expect(unEmpleado.apellido).to.equal("Pelegrina").and.to.be.a('string').and.not.empty;
    });

    it ('set email debe modificar el email del empleado', () => {
        unEmpleado.email = "sergiovela@correo.ugr.es";
        expect(unEmpleado.email).to.equal("sergiovela@correo.ugr.es").and.to.be.a('string').and.not.empty;
    });
});
