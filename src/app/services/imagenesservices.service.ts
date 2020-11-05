import { Injectable } from '@angular/core';
import { ImgGalery, TypeGalery } from '../models/literales';

@Injectable({
  providedIn: 'root'
})
export class ImagenesservicesService {

  private _listaImagenes: ImgGalery[];
  private _typeGalery: TypeGalery[];



  constructor() {
    this.importGalery();
      this.importarType();
   }


  getImagenesGalery(){
    return this._listaImagenes;
  }

  getTypeGalery(){
    return this._typeGalery;
  }

  importarType(){
     this._typeGalery = [
       {
         id:1,
         descripcion: 'anime'
       },
       {
        id:2,
        descripcion: 'cultura'
      },
      {
        id:3,
        descripcion: 'spectro'
      },
      {
        id:4,
        descripcion: 'code'
      }
     ];
  }

  importGalery(){
    this._listaImagenes = [
      {
        id: 1,
        title: 'Tecnologia',
        descripcion: 'Tecnologia code',
        url: './assets/imagenes/tecnologia.jpg',
        tipo: 1
      },
      {
        id: 2,
        title: 'Tormenta',
        descripcion: 'Tormenta code',
        url: './assets/imagenes/tormenta.jpg',
        tipo: 1
      },
      {
        id: 3,
        title: 'Love',
        descripcion: 'Letras de amor',
        url: './assets/imagenes/love.jpg',
        tipo: 1
      },
      {
        id: 4,
        title: 'Tormenta',
        descripcion: 'Tormenta code',
        url: './assets/imagenes/tormenta.jpg',
        tipo: 2
      },
      {
        id: 5,
        title: 'Love',
        descripcion: 'Letras de amor',
        url: './assets/imagenes/love.jpg',
        tipo: 2
      },
      {
        id: 6,
        title: 'Tecnologia',
        descripcion: 'Tecnologia code',
        url: './assets/imagenes/tecnologia.jpg',
        tipo: 2
      },
      {
        id: 7,
        title: 'Tecnologia',
        descripcion: 'Tecnologia code',
        url: './assets/imagenes/tecnologia.jpg',
        tipo: 3
      },
      {
        id: 8,
        title: 'Tormenta',
        descripcion: 'Tormenta code',
        url: './assets/imagenes/tormenta.jpg',
        tipo: 3
      },
      {
        id: 9,
        title: 'Love',
        descripcion: 'Letras de amor',
        url: './assets/imagenes/love.jpg',
        tipo: 3
      },
      {
        id: 10,
        title: 'Tormenta',
        descripcion: 'Tormenta code',
        url: './assets/imagenes/tormenta.jpg',
        tipo: 4
      },
      {
        id: 11,
        title: 'Love',
        descripcion: 'Letras de amor',
        url: './assets/imagenes/love.jpg',
        tipo: 4
      },
      {
        id: 12,
        title: 'Tecnologia',
        descripcion: 'Tecnologia code',
        url: './assets/imagenes/tecnologia.jpg',
        tipo: 4
      }
    ];
  }
}
