import { Injectable } from '@angular/core';
import { ContenidoCuerpo } from '../models/literales';

@Injectable({
  providedIn: 'root'
})
export class ContenidocuerpoService {

  descripcionCuerpo: ContenidoCuerpo[];

  constructor() {
    this.descripcionCuerpo=[
      {
        title:'Escribe un Titulo',
        descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,\
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.\
        It has survived not only five centuries, but also the leap into electronic typesetting,\ remaining essentially unchanged.\ '
      },
      {
        title:'Escribe un Titulo 22',
        descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,\
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.\
        It has survived not only five centuries, but also the leap into electronic typesetting,\ remaining essentially unchanged.\ ',
        url: './assets/imagenes/update.jpg'
      },
      {
        title:'Escribe un Titulo 33',
        descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,\
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.\
        It has survived not only five centuries, but also the leap into electronic typesetting,\ remaining essentially unchanged.\ '
      },
      {
        title:'Escribe un Titulo 44',
        descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,\
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.\
        It has survived not only five centuries, but also the leap into electronic typesetting,\ remaining essentially unchanged.\ '
      }
    ];
  }

  getDescripcion(){
    return this.descripcionCuerpo;
  }

}
