import { Equipo } from "./equipo";

class OrganizeAndGo {
    private _equipos: Array<Equipo>;
    
    constructor(equipos: Array<Equipo>) {
        this._equipos = equipos;
    }

    get equipos(): Array<Equipo> {
        return this._equipos;
    }

    getEquipo(index: number): Equipo {
        return this._equipos[index];
    }

    set equipos(equipos: Array<Equipo>) {
        this._equipos = equipos;
    }
    
}

export { OrganizeAndGo };
