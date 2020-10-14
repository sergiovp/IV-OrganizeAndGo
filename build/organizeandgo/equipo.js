"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipo = void 0;
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
}
exports.Equipo = Equipo;
