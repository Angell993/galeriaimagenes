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
        title: 'Love',
        descripcion: 'Letras de amor',
        url: this.ur + 'love.jpg'
      },
      {
        title: 'Programador',
        descripcion: 'Programador code',
        url: this.ur + 'programador.jpg'
      },
      {
        title: 'Love',
        descripcion: 'Letras de amor',
        url: this.ur + 'love.jpg'
      },
      {
        title: 'Programador',
        descripcion: 'Programador code',
        url: this.ur + 'programador.jpg'
      },
      {
        title: 'Love',
        descripcion: 'Letras de amor',
        url: this.ur + 'love.jpg'
      },
      {
        title: 'Programador',
        descripcion: 'Programador code',
        url: this.ur + 'programador.jpg'
      },
      {
        title: 'Love',
        descripcion: 'Letras de amor',
        url: this.ur + 'love.jpg'
      },
      {
        title: 'Programador',
        descripcion: 'Programador code',
        url: this.ur + 'programador.jpg'
      },
      {
        title: 'Love',
        descripcion: 'Letras de amor',
        url: this.ur + 'love.jpg'
      },
      {
        title: 'Programador',
        descripcion: 'Programador code',
        url: this.ur + 'programador.jpg'
      },
      {
        title: 'Love',
        descripcion: 'Letras de amor',
        url: this.ur + 'love.jpg'
      },
      {
        title: 'Programador',
        descripcion: 'Programador code',
        url: this.ur + 'programador.jpg'
      }
    ];
   }


   getImagenes(){
     return this.imagenes;
   }
}
