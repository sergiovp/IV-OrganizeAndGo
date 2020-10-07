class empleado {
    constructor(id, nombre, apellido, email) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }

    get id() {
        return this.id;
    }

    get nombre() {
        return this.nombre;
    }

    get apellido() {
        return this.apellido;
    }

    get email() {
        return this.email;
    }

    set id(id) {
        this.id = id;
    }

    set nombre(nombre) {
        this.nombre = nombre;
    }

    set apellido(apellido) {
        this.apellido = apellido;
    }

    set email(email) {
        this.email = email;
    }
}
