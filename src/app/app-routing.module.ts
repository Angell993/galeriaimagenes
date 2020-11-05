import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'inicio', component: InicioComponent},
  {path:'galeria', component: GaleriaComponent},
  {path:'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
