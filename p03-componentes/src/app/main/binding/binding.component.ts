import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  sNombre: string;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe';
  }

  borrar() {
    this.sNombre = '';
  }
}
