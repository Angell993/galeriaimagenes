import { Component, OnInit } from '@angular/core';
import { InfoPersonal } from 'src/app/models/literales';
import { InfopersonalserviceService } from 'src/app/services/infopersonalservice.service';

@Component({
  selector: 'comp-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  imagen = './assets/imagenes/tecnologia.jpg';

  inforPersonal: InfoPersonal[];

  constructor(private infoperso: InfopersonalserviceService) { }

  ngOnInit(): void {
    this.inforPersonal = this.infoperso.getInfoPersonal();
  }

}
