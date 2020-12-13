//import { Empleado } from "./empleado";
//import { Equipo } from "./equipo";
//import { Tarea } from "./tarea";
const Empleado = require('./empleado');
const Equipo = require('./equipo');
const Tarea = require('./tarea');

class OrganizeAndGo {
    
    constructor(equipos) {
        this._equipos = equipos;
    }

    get equipos() {
        return this._equipos;
    }

    getEquipo(index) {
        return this._equipos[index];
    }

    set equipos(equipos) {
        this._equipos = equipos;
    }

    addEquipo(nuevoEquipo) {
        this._equipos.push(nuevoEquipo);
    }
    
}

module.exports = OrganizeAndGo;
