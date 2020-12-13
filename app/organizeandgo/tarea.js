/**
 * Clase tarea. Un objeto de esta clase representa a una tarea.
 */

class Tarea {

    constructor(id, terminada, descripcion, tiempoEstimado, prioridad, empleadoAsignado) {
        this._id = id;
        this._terminada = terminada;
        this._descripcion = descripcion;
        this._tiempoEstimado = tiempoEstimado;
        this._prioridad = prioridad;
        this._empleadoAsignado = empleadoAsignado;
    }

    get id(){
        return this._id;
    }

    get terminada() {
        return this._terminada;
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

    set terminada(terminada) {
        this._terminada = terminada;
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

module.exports = Tarea;
