enum Prioridad {
    Baja,
    Media,
    Importante,
    Urgente,
}

class Tarea {
    private _id: number;
    private _descripcion: string;
    private _tiempoEstimado: string;
    private _prioridad: Prioridad;
    private _empleadoAsignado: number;

    constructor(id: number, descripcion: string, 
        tiempoEstimado: string, prioridad: Prioridad, empleadoAsignado: number) {
        this._id = id;
        this._descripcion = descripcion;
        this._tiempoEstimado = tiempoEstimado;
        this._prioridad = prioridad;
        this._empleadoAsignado = empleadoAsignado;
    }

    get id(): number {
        return this._id;
    }

    get descripcion(): string {
        return this._descripcion;
    }

    get tiempoEstimado(): string {
        return this._tiempoEstimado;
    }

    get prioridad(): Prioridad {
        return this._prioridad;
    }

    get empleadoAsignado(): number {
        return this._empleadoAsignado;
    }

    set id(id: number) {
        this._id = id;
    }

    set descripcion(descripcion: string) {
        this._descripcion = descripcion;
    }

    set tiempoEstimado(tiempoEstimado: string) {
        this._tiempoEstimado = tiempoEstimado;
    }

    set prioridad(prioridad: Prioridad) {
        this._prioridad = prioridad;
    }

    set empleadoAsignado(empleadoAsignado: number) {
        this._empleadoAsignado = empleadoAsignado;
    } 
}

export { Prioridad, Tarea };
