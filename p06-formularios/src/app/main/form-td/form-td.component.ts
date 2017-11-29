import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ImpresoraModel, DepartamentoModel, UsuarioModel, Usuario } from '../datos.model';

@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {

  aImpresoras: Array<ImpresoraModel>;
  aDepartamentos: Array<DepartamentoModel>;

  oUsuario: Usuario;

  oImpresora: ImpresoraModel;
  oDepartamento: DepartamentoModel;

  isColor: boolean;
  isClaro: boolean;

  @ViewChild('formtd') formulario: ElementRef;

  constructor() { }

  ngOnInit() {
    this.aImpresoras = [
      {
        id: 1,
        nombre: 'HP'
      },
      {
        id: 2,
        nombre: 'Lexmark'
      },
      {
        id: 3,
        nombre: 'Cannon'
      }
    ];

    this.aDepartamentos = [
      {
        id: 1,
        nombre: 'Ventas'
      },
      {
        id: 2,
        nombre: 'Marketing'
      },
      {
        id: 3,
        nombre: 'Compras'
      },
      {
        id: 4,
        nombre: 'Sistemas'
      }
    ];

    this.oUsuario = new Usuario('', '', '');
    console.log(this.formulario);

  }

  enviarDatos() {
    console.log('Formulario enviado');
  }

  borrar() {
    this.formulario.resetForm();
  }
}
