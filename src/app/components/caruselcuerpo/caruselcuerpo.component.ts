import { Component, OnInit } from '@angular/core';
import { ContenidoCuerpo } from 'src/app/models/literales';
import { ContenidocuerpoService } from 'src/app/services/contenidocuerpo.service';

@Component({
  selector: 'comp-caruselcuerpo',
  templateUrl: './caruselcuerpo.component.html',
  styleUrls: ['./caruselcuerpo.component.scss']
})
export class CaruselcuerpoComponent implements OnInit {

  imagenes={
    title1: 'Love',
    url1: './assets/imagenes/love.jpg',
    title2: 'Programador',
    url2: './assets/imagenes/programador.jpg',
    title3: 'Update',
    url3: './assets/imagenes/update.jpg'
  };

  descripcionCuerpo: ContenidoCuerpo[];

  constructor(private descripcion: ContenidocuerpoService) {
  }

  ngOnInit(): void {
    this.descripcionCuerpo = this.descripcion.getDescripcion();
  }

}
