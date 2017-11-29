import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  sNombre: string;
  nPrecio: number;
  nValor: number;
  dFecha: Date;
  oDatos: Object;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe perez';
    this.nPrecio = 25.5;
    this.nValor = 542.23245;
    this.dFecha = new Date();
    this.oDatos = {
      nombre: 'Pepe perez',
      precio: 25.5,
      valor: 542.323232,
      fecha: new Date()
    };
  }

}
