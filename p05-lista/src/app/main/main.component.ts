import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="container0">
    <article class="alto">
      <app-tareas></app-tareas>
      <app-acumulador></app-acumulador>
      <app-pipes></app-pipes>
    </article>
    </div>
  `,
  styles: [
    '.alto {min-height: 10rem}'
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
