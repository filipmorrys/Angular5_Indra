import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <img class="img-fluid" alt="Angular Logo" [src]="logoImg" [alt]="altImg" >
  `
})
export class LogoComponent implements OnInit {

  logoImg: string;
  altImg: string;

  constructor() { }

  ngOnInit() {
    this.logoImg = '../../../assets/logo-angular.svg';
    this.altImg = 'Angular Logo';
  }

}
