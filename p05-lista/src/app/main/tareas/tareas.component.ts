import { Component, OnInit } from '@angular/core';

// Clave de almacenamiento de las tareas en el localStorage
const TASK_STORAGE = 'TASK_STORAGE';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  aTareas: Array<string>;
  sTarea: string;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem(TASK_STORAGE)) {
      this.aTareas = JSON.parse(localStorage.getItem(TASK_STORAGE));
    } else {
      this.aTareas = [];
    }
  }

  addTarea() {
    if (this.sTarea === '') {
      throw Error('No se pueden añadir elementos vacíos');
    }
    this.aTareas.push(this.sTarea);
    this.actualizarStorage();

    this.sTarea = '';
  }

  deleteTarea(index: number) {
    this.aTareas.splice(index, 1);
    this.actualizarStorage();    
  }

  private actualizarStorage() {
    // Almacenamiento en el localStorage
    localStorage.setItem(TASK_STORAGE, JSON.stringify(this.aTareas));
  }
}
