import { Component, OnInit } from '@angular/core';
import { ImpresoraModel, DepartamentoModel, Usuario } from '../datos.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})
export class FormMdComponent implements OnInit {

  aImpresoras: Array<ImpresoraModel>;
  aDepartamentos: Array<DepartamentoModel>;

  formulario: FormGroup;

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

    // Declaramos un formulario Reactivo
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^\d{9}$')]),
      impresora: new FormControl(),
      isColor: new FormControl(true),
      isClaro: new FormControl(true),
      departamento: new FormControl()
    });

    console.log(this.formulario);
  }

  enviarDatos() {
    console.log('Formulario enviado');
  }

  borrar() {
  }

}
