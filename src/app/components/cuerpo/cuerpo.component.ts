import { Component, OnInit } from '@angular/core';
import { ContenidoCuerpo } from 'src/app/models/literales';
import { ContenidocuerpoService } from 'src/app/services/contenidocuerpo.service';

@Component({
  selector: 'comp-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss']
})
export class CuerpoComponent implements OnInit {

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

  isImg(): Boolean{
    for(let i = 0; i < this.descripcionCuerpo.length; i++){
      if(this.descripcionCuerpo[i].url === null && this.descripcionCuerpo[i].url === ''){
        return false;
      }
    }
    return true;
  }


}
