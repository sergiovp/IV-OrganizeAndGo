class tarea {
    constructor(id, descripcion, tiempo_estimado, prioridad, empleado_asignado) {
        this.id = id;
        this.descripcion = descripcion;
        this.tiempo_estimado = tiempo_estimado;
        this.prioridad = prioridad;
        this.empleado_asignado = empleado_asignado;
    }

    get id() {
        return this.id;
    }

    get descripcion() {
        return this.descripcion;
    }

    get tiempo_estimado() {
        return this.tiempo_estimado;
    }

    get prioridad() {
        return this.prioridad;
    }

    get empleado_asignado() {
        return this.empleado_asignado;
    }

    set id(id) {
        this.id = id;
    }

    set descripcion(descripcion) {
        this.descripcion = descripcion;
    }

    set tiempo_estimado(tiempo_estimado) {
        this.tiempo_estimado = tiempo_estimado;
    }

    set prioridad(prioridad) {
        this.prioridad = prioridad;
    }

    set empleado_asignado(empleado_asignado) {
        this.empleado_asignado = empleado_asignado;
    } 
}
