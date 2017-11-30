import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const GOOGLE_URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';

@Injectable()
export class LibrosService {

  aDatos: Array<string>;

  constructor(public http: HttpClient) {
    this.aDatos = [
      'El nombre del viento',
      'El señor de los anillos',
      'Criptonomicón',
      'Dune'
    ];
  }

  buscarMock(clave: string) {
    return this.aDatos;
  }

  bucscarMockAsync(clave: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(this.aDatos); }
        , 3000);
    });
  }

  buscar(clave: string) {
    const aLibros: Array<string> = [];
    return this.http.get(GOOGLE_URL + clave).toPromise()
    .then(
      (response: any) => {
        console.log('Respuesta de google: ' + response);
        if (response.items) {
          response.items.forEach(item => {
            console.log(item.volumeInfo.title);
            aLibros.push(item.volumeInfo.title);
          });
        }
        return aLibros;
      }
    );
  }
}
