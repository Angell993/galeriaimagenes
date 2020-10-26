import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PiedepaginaComponent } from './components/piedepagina/piedepagina.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PiedepaginaComponent,
    CuerpoComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
