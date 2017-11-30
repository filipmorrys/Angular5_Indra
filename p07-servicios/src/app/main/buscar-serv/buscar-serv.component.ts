import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../libros.service';



@Component({
  selector: 'app-buscar-serv',
  templateUrl: './buscar-serv.component.html',
  styleUrls: ['./buscar-serv.component.css']
})
export class BuscarServComponent implements OnInit {

  sClave: string;
  aLibros: Array<string>;

  constructor(public librosService: LibrosService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  btnBuscarServ() {
    this.aLibros = [];
    this.librosService.buscar(this.sClave)
    .then(
      (response) => { 
        console.log('Respuesta del servicio: ' + response);
        this.aLibros = response; 
      }
    );
  }


}
