import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {

  aDatos: Array<string>;

  constructor() {
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
}
