import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-mock-libros-async',
  templateUrl: './mock-libros-async.component.html',
  styleUrls: ['./mock-libros-async.component.css'],
  encapsulation: ViewEncapsulation.Emulated // valor por defecto
})
export class MockLibrosAsyncComponent implements OnInit {

  sClave: string;
  aLibros: Array<string>;

  constructor(private librosService: LibrosService) { }

  ngOnInit() {
    this.sClave = '';
    this.aLibros = [];
  }

  buscar() {
    this.librosService.bucscarMockAsync(this.sClave)
    .then(JSON.parse)
    .then(
      (response) => { this.aLibros = response; }, // en caso de OK
      () => {}  // en caso de KO
    );
  }
}
