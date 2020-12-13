//import { Empleado } from './empleado';
//import { Tarea, Prioridad } from './tarea';

const Empleado = require('./empleado');
const Tarea = require('./tarea');

/**
 * Clase equipo. Un objeto de esta clase representa a un equipo que usa la aplicación.
 * 
 */

class Equipo {

    constructor(id, nombre, empleados, tareas) {
        this._id = id;
        this._nombre = nombre;
        this._empleados = empleados;
        this._tareas = tareas;
    }

    get id() {
        return this._id;
    }

    get nombre() {
        return this._nombre;
    }

    get empleados() {
        return this._empleados;
    }

    getEmpleado(index) {
        return this._empleados[index];
    }

    get tareas() {
        return this._tareas;
    }

    getTarea(index) {
        return this._tareas[index];
    }

    set id(id) {
        this._id = id;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    set empleados(empleados) {
        this._empleados = empleados;
    }

    setEmpleado(index, nuevoEmpleado) {
        this._empleados[index] = nuevoEmpleado;
    }

    set tareas(tareas) {
        this._tareas = tareas;
    }

    setTarea(index, nuevaTarea) {
        this.tareas[index] = nuevaTarea;
    }

    addEmpleado(nuevoEmpleado) {
        this._empleados.push(nuevoEmpleado);
    }

    addTarea(nuevaTarea) {
        this._tareas.push(nuevaTarea);
    }
}

module.exports = Equipo;
