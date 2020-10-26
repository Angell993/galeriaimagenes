import { Component, OnInit } from '@angular/core';
import { MenuTitle } from 'src/app/models/literales';

@Component({
  selector: 'comp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

titleMenu: MenuTitle[];

  constructor() {
    this.titleMenu = [
      {title: 'Inicio',
       href: '#'},
      {title: 'Galeria',
      href: '#'},
      {title: 'Contacto',
      href: '#'}
    ];

   }

  ngOnInit(): void {
  }

}
