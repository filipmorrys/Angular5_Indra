import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { appRouting } from './app.routing';
import { CatalogoModule } from './catalogo/catalogo.module';
import { NoticiasModule } from './noticias/noticias.module';
import { AutoresModule } from './autores/autores.module';
import { AboutModule } from './about/about.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    appRouting,
    BrowserModule,
    MainModule,
    CatalogoModule,
    NoticiasModule,
    AutoresModule,
    AboutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
