/**
 * Clase empleado. Un objeto de esta clase representa a un empleado 
 * usuario de la aplicación.
 */

class Empleado {
    constructor(id, nombre, apellido, email) {
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
    }

    get id() {
        return this._id;
    }

    get nombre() {
        return this._nombre;
    }

    get apellido() {
        return this._apellido;
    }

    get email() {
        return this._email;
    }

    set id(id) {
        this._id = id;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    set email(email) {
        this._email = email;
    }
}

module.exports = Empleado;
