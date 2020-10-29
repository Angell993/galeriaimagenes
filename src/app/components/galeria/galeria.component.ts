import { Component, OnInit } from '@angular/core';
import { ImgGalery } from 'src/app/models/literales';
import { ImagenesservicesService } from 'src/app/services/imagenesservices.service';

@Component({
  selector: 'comp-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  imagen: ImgGalery[];
  imagenResponse = {
    title: '',
    descripcion: '',
    url: ''
  }

  constructor( private imagenes: ImagenesservicesService) { }

  ngOnInit(): void {
    this.imagen = this.imagenes.getImagenes();
  }

  recibirImagen(title: string, desp: string, url:string){
    this.imagenResponse.title = title;
    this.imagenResponse.descripcion = desp;
    this.imagenResponse.url = url;
  }

}
