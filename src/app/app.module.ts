import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PiedepaginaComponent } from './components/piedepagina/piedepagina.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { CaruselcuerpoComponent } from './components/caruselcuerpo/caruselcuerpo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PiedepaginaComponent,
    GaleriaComponent,
    ContactoComponent,
    InicioComponent,
    ContenidoComponent,
    CaruselcuerpoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
