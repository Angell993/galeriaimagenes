import { Injectable } from '@angular/core';
import { ImgGalery } from '../models/literales';

@Injectable({
  providedIn: 'root'
})
export class ImagenesservicesService {

  ur = './assets/imagenes/';
  imagenes: ImgGalery[];

  constructor() {
    this.imagenes = [
      {
        title: 'Tecnologia',
        descripcion: 'Tecnologia code',
        url: this.ur + 'tecnologia.jpg'
      },
      {
        title: 'Tormenta',
        descripcion: 'Tormenta code',
        url: this.ur + 'tormenta.jpg'
      },
      {
        title: 'Love',
        descripcion: 'Letras de amor',
        url: this.ur + 'love.jpg'
      },
      {
        title: 'Tormenta',
        descripcion: 'Tormenta code',
        url: this.ur + 'tormenta.jpg'
      },
      {
        title: 'Love',
        descripcion: 'Letras de amor',
        url: this.ur + 'love.jpg'
      },
      {
        title: 'Tecnologia',
        descripcion: 'Tecnologia code',
        url: this.ur + 'tecnologia.jpg'
      },
      {
        title: 'Tecnologia',
        descripcion: 'Tecnologia code',
        url: this.ur + 'tecnologia.jpg'
      },
      {
        title: 'Tormenta',
        descripcion: 'Tormenta code',
        url: this.ur + 'tormenta.jpg'
      },
      {
        title: 'Love',
        descripcion: 'Letras de amor',
        url: this.ur + 'love.jpg'
      },
      {
        title: 'Tormenta',
        descripcion: 'Tormenta code',
        url: this.ur + 'tormenta.jpg'
      },
      {
        title: 'Love',
        descripcion: 'Letras de amor',
        url: this.ur + 'love.jpg'
      },
      {
        title: 'Tecnologia',
        descripcion: 'Tecnologia code',
        url: this.ur + 'tecnologia.jpg'
      }
    ];
   }


   getImagenes(){
     return this.imagenes;
   }
}
