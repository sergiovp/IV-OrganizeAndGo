const Equipo = require('./equipo');

class OrganizeAndGo {
    
    constructor() {
        this._equipos = new Array();
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

    addEquipo(id, nombre) {
        let equipoNuevo = new Equipo(id, nombre);
        this._equipos.push(equipoNuevo);
    }
}

module.exports = OrganizeAndGo;
