class organize_and_go {
    constructor(equipos) {
        this.equipos = equipos;
    }

    get equipos() {
        return this.equipos;
    }

    get equipo(index) {
        return this.equipos[index];
    }
    
}
