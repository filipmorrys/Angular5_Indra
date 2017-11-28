interface Usuario {

    // Lo que haya aqui dentro es publico siempre
    nombre : string;
    apellidos: string;

}

class Tipos {
    // algo puede ser de cualquier tipo
    algo: any;
    // id puede ser de tipo number o string
    id: number | string;
    sNombre: string;
    nEdad: number;
    isAlumno: boolean;
    aDatos: Array<string>;
    aNumbers: number[];

    oUser: Usuario;

    constructor() {
        this.oUser = {nombre: "Pepe", apellidos: "Perez"};
        this.aDatos = [];
        this.aDatos.length;
    }
}

class Tipica {
    dos;

    // uno se va a setear en el constructor y va a ser una propiedad publica de la clase. 
    // es equivalente a todo lo que se hace con dos
    constructor(public uno: string, dos) {
        this.dos = dos;
    }
}