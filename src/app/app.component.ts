import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ocultar:boolean = true;


  ocultarCarusel(ocultar: boolean){
    this.ocultar = ocultar;
  }
}
