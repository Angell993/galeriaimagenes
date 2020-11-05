import { Component, OnInit } from '@angular/core';
import { ContenidoCuerpo } from 'src/app/models/literales';
import { ContenidocuerpoService } from 'src/app/services/contenidocuerpo.service';

@Component({
  selector: 'comp-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {

  descripcionCuerpo: ContenidoCuerpo[];

  constructor(private descripcion: ContenidocuerpoService) {
  }

  ngOnInit(): void {
    this.descripcionCuerpo = this.descripcion.getDescripcion();
  }

}
