import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UrlTitle } from 'src/app/models/literales';

@Component({
  selector: 'comp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output('ocultar') ocultar= new EventEmitter<boolean>();
  logo='./assets/imagenes/favicon.ico';

titleMenu: UrlTitle[];

  constructor() {
    this.titleMenu = [
      {title: 'Inicio',
       url: '/inicio'},
      {title: 'Galeria',
      url: '/galeria'},
      {title: 'Contacto',
      url: '/contacto'}
    ];

   }

  ngOnInit(): void {

  }

  isVisibled(titulo: string){
    if(titulo === 'Inicio'){
      this.ocultar.emit(true);
    }else{
    this.ocultar.emit(false);
  }
  }

}
