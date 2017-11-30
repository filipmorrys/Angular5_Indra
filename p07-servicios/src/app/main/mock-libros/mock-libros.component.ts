import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-mock-libros',
  templateUrl: './mock-libros.component.html',
  styleUrls: ['./mock-libros.component.css'],
  encapsulation: ViewEncapsulation.Emulated // valor por defecto
})
export class MockLibrosComponent implements OnInit {

  sClave: string;
  aLibros: Array<string>;

  constructor(private librosService: LibrosService) { }

  ngOnInit() {
    this.sClave = '';
    this.aLibros = [];
  }

  buscar() {
    this.aLibros = this.librosService.buscarMock(this.sClave);
  }
}
