class Empleado {
    private _id: number;
    private _nombre: string;
    private _apellido: string;
    private _email: string;

    public constructor(id: number, nombre: string, apellido: string, email: string) {
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
    }

    get id(): number {
        return this._id;
    }

    get nombre(): string {
        return this._nombre;
    }

    get apellido(): string {
        return this._apellido;
    }

    get email(): string {
        return this._email;
    }

    set id(id: number) {
        this._id = id;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    set apellido(apellido: string) {
        this._apellido = apellido;
    }

    set email(email: string) {
        this._email = email;
    }
}

export { Empleado };
