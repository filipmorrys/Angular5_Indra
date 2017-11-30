import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AutoresComponent } from './autores/autores.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
    { path: 'inicio', component: MainComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'autores', component: AutoresComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'about', component: AboutComponent },
    { path: '', pathMatch: 'full', redirectTo: 'inicio'}
];


export const appRouting = RouterModule.forChild(routes);
