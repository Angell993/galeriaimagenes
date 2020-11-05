import { Injectable } from '@angular/core';
import { InfoPersonal } from '../models/literales';

@Injectable({
  providedIn: 'root'
})
export class InfopersonalserviceService {

  infoper: InfoPersonal[];

  constructor() {
    this.infoper=[
      {
        nombre: 'Juan',
        apellido: 'Lopez Perez',
        movil: '666666666',
        url: './assets/imagenes/tormenta.jpg'
      }
   ];
  }

  getInfoPersonal(){
    return this.infoper;
  }
}
