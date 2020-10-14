"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizeAndGo = void 0;
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
}
exports.OrganizeAndGo = OrganizeAndGo;
