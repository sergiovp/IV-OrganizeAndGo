import { Empleado } from './empleado';
import { Tarea, Prioridad } from './tarea';

/**
 * Clase equipo. Un objeto de esta clase representa a un equipo que usa la aplicación.
 */

class Equipo {
    private _id: number;
    private _nombre: string;
    private _empleados: Array<Empleado>;
    private _tareas: Array<Tarea>;

    constructor(id: number, nombre: string,
        empleados: Array<Empleado>, tareas: Array<Tarea>) {
        this._id = id;
        this._nombre = nombre;
        this._empleados = empleados;
        this._tareas = tareas;
    }

    get id(): number {
        return this._id;
    }

    get nombre(): string {
        return this._nombre;
    }

    get empleados(): Array<Empleado> {
        return this._empleados;
    }

    getEmpleado(index: number): Empleado {
        return this._empleados[index];
    }

    get tareas(): Array<Tarea> {
        return this._tareas;
    }

    getTarea(index: number): Tarea {
        return this._tareas[index];
    }

    set id(id: number) {
        this._id = id;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    set empleados(empleados: Array<Empleado>) {
        this._empleados = empleados;
    }

    setEmpleado(index: number, nuevoEmpleado: Empleado) {
        this._empleados[index] = nuevoEmpleado;
    }

    set tareas(tareas: Array<Tarea>) {
        this._tareas = tareas;
    }

    setTarea(index: number, nuevaTarea: Tarea) {
        this.tareas[index] = nuevaTarea;
    }

    addEmpleado(id: number, nombre: string, apellido: string, email: string) {
        let nuevoEmpleado: Empleado = new Empleado(id, nombre, apellido, email);
        
        this._empleados.push(nuevoEmpleado);
    }

    addTarea(id: number, terminada: boolean = false,descripcion: string, tiempoEstimado: string,
        prioridad: Prioridad, empleadoAsignado: number) {
        let nuevaTarea: Tarea = new Tarea(id, terminada,descripcion, tiempoEstimado,
            prioridad, empleadoAsignado);

        this._tareas.push(nuevaTarea);
    }
}

export { Equipo };
