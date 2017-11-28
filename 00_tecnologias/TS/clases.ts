class Libro {

    private titulo: string;
    private autor: string;

    constructor(titulo, autor) {
        // Las propiedades se declaran aqui
        this.titulo = titulo;
        this.autor = autor;
    }
 }

 class LibreTecnico extends Libro {

    protected categoria: string;

     constructor(titulo, autor, categoria) {
         super(titulo, autor);
         this.categoria = categoria;
     }
 }


 let oLibro = new Libro("Angular", "Pepe");
 // Y esto ya no se puede hacer
 // oLibro.editorial = "Anaya";

 console.log(oLibro);