import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Http } from '@angular/http';


const GOOGLE_URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';


@Component({
  selector: 'app-buscar-google',
  templateUrl: './buscar-google.component.html',
  styleUrls: ['./buscar-google.component.css']
})
export class BuscarGoogleComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;

  // constructor(public http: Http) { }
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.aLibros = [];
  }

  btnBuscar() {
    this.aLibros = []
    this.http.get(GOOGLE_URL + this.sClave).toPromise()
    .then(
      (response: any) => {
        console.log(response);
        if (response.items) {
          response.items.forEach(item => {
            console.log(item.volumeInfo.title);
            this.aLibros.push(item.volumeInfo.title);
          });
        }
      }
    );
  }

  btnBuscarResponsive() {
    this.aLibros = []
    this.http.get(GOOGLE_URL + this.sClave)
    .subscribe(
      (response: any) => {
        console.log(response);
        if (response.items) {
          response.items.forEach(item => {
            console.log(item.volumeInfo.title);
            this.aLibros.push(item.volumeInfo.title);
          });
        }
      }
    );
  }

}
