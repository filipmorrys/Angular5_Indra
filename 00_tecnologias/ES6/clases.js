class Libro {
    constructor(titulo, autor) {
        // Las propiedades se declaran aqui
        this.titulo = titulo;
        this.autor = autor;
    }
 }

 let oLibro = new Libro("Angular", "Pepe");
 oLibro.editorial = "Anaya";

 console.log(oLibro);