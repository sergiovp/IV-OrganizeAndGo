"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = exports.Prioridad = void 0;
var Prioridad;
(function (Prioridad) {
    Prioridad[Prioridad["Baja"] = 0] = "Baja";
    Prioridad[Prioridad["Media"] = 1] = "Media";
    Prioridad[Prioridad["Importante"] = 2] = "Importante";
    Prioridad[Prioridad["Urgente"] = 3] = "Urgente";
})(Prioridad || (Prioridad = {}));
exports.Prioridad = Prioridad;
class Tarea {
    constructor(id, descripcion, tiempoEstimado, prioridad, empleadoAsignado) {
        this._id = id;
        this._descripcion = descripcion;
        this._tiempoEstimado = tiempoEstimado;
        this._prioridad = prioridad;
        this._empleadoAsignado = empleadoAsignado;
    }
    get id() {
        return this._id;
    }
    get descripcion() {
        return this._descripcion;
    }
    get tiempoEstimado() {
        return this._tiempoEstimado;
    }
    get prioridad() {
        return this._prioridad;
    }
    get empleadoAsignado() {
        return this._empleadoAsignado;
    }
    set id(id) {
        this._id = id;
    }
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }
    set tiempoEstimado(tiempoEstimado) {
        this._tiempoEstimado = tiempoEstimado;
    }
    set prioridad(prioridad) {
        this._prioridad = prioridad;
    }
    set empleadoAsignado(empleadoAsignado) {
        this._empleadoAsignado = empleadoAsignado;
    }
}
exports.Tarea = Tarea;
