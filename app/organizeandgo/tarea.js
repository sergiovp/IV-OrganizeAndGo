class tarea {
    constructor(id, descripcion, tiempoEstimado, prioridad, empleadoAsignado) {
        this.id = id;
        this.descripcion = descripcion;
        this.tiempoEstimado = tiempoEstimado;
        this.prioridad = prioridad;
        this.empleadoAsignado = empleadoAsignado;
    }

    get id() {
        return this.id;
    }

    get descripcion() {
        return this.descripcion;
    }

    get tiempoEstimado() {
        return this.tiempoEstimado;
    }

    get prioridad() {
        return this.prioridad;
    }

    get empleadoAsignado() {
        return this.empleadoAsignado;
    }

    set id(id) {
        this.id = id;
    }

    set descripcion(descripcion) {
        this.descripcion = descripcion;
    }

    set tiempoEstimado(tiempoEstimado) {
        this.tiempoEstimado = tiempoEstimado;
    }

    set prioridad(prioridad) {
        this.prioridad = prioridad;
    }

    set empleadoAsignado(empleadoAsignado) {
        this.empleadoAsignado = empleadoAsignado;
    } 
}
