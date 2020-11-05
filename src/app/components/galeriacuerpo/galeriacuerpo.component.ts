import { Component, OnInit } from '@angular/core';
import { ImgGalery, TypeGalery } from 'src/app/models/literales';
import { ImagenesservicesService } from 'src/app/services/imagenesservices.service';

@Component({
  selector: 'comp-galeriacuerpo',
  templateUrl: './galeriacuerpo.component.html',
  styleUrls: ['./galeriacuerpo.component.scss']
})
export class GaleriacuerpoComponent implements OnInit {


  listadoImagenes: ImgGalery[];
  typeGalery: TypeGalery[];

  imagenModal = {
    id: 0,
    title: '',
    descripcion: '',
    url: '',
    tipo: 0
  }

  constructor( private _serviceImagen: ImagenesservicesService ) {
    this.listadoImagenes = _serviceImagen.getImagenesGalery();
    this.typeGalery = _serviceImagen.getTypeGalery();
  }

  ngOnInit(): void {
  }



  viewImageModal(id: number, title: string, desp: string, url:string, type: number){
    this.imagenModal.id = id;
    this.imagenModal.title = title;
    this.imagenModal.descripcion = desp;
    this.imagenModal.url = url;
    this.imagenModal.tipo = type;
  }
}
