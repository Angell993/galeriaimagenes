import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ImgGalery, TypeGalery } from 'src/app/models/literales';
import { ImagenesservicesService } from 'src/app/services/imagenesservices.service';

@Component({
  selector: 'comp-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  busquedaImg: boolean= false;
  imagenEncontrada: ImgGalery[]; // se utiliza para realizar la busqueda
  listadoImagenes: ImgGalery[];
  typeGalery: TypeGalery[];

  imagenModal = {
    id: 0,
    title: '',
    descripcion: '',
    url: '',
    tipo: 0
  }
  // Hace referencia [formGrup] para caturar el value
  imagenForm: FormGroup;


  constructor(private _builder: FormBuilder, private _serviceImagen: ImagenesservicesService) {
    this.imagenForm = this.createForm();
  }

  ngOnInit(): void {
  }


  private createForm(){
    return new FormGroup({
      buscarImg: new FormControl(null,[Validators.required])
    });
  }

  //Funciona
  searchImg(){
    this.listadoImagenes = this._serviceImagen.getImagenesGalery();
    this.typeGalery = this._serviceImagen.getTypeGalery();
    // hay que poner (nombre del formGrup).get(el nombre que le has puesto 'formControlName'en html).value
    let imgBuscar = this.imagenForm.get('buscarImg').value;
    if (!this._isEmpty(imgBuscar)) {
      this.busquedaImg = false;
      this.listadoImagenes = this._serviceImagen.getImagenesGalery();
      this.typeGalery = this._serviceImagen.getTypeGalery();
    } else {
      this.imagenEncontrada = [];
       this.listadoImagenes.map((img: ImgGalery) => {
        if(img.title === imgBuscar){ // si budca por imagen
          this.busquedaImg = true;
          this.imagenModal = {
              id: img.id,
              title: img.title,
              descripcion: img.descripcion,
              url: img.url,
              tipo: img.tipo
            };
            return this.imagenEncontrada.push(this.imagenModal);
        }else{// si busca por genero
          this.imagenEncontrada = [];
          this.typeGalery.map(( tipo: TypeGalery)=>{
            if (tipo.descripcion === imgBuscar.toLowerCase()) {
              this.listadoImagenes.map((img: ImgGalery) => {
                if (tipo.id === img.tipo) {
                  this.busquedaImg = true;
                  this.imagenModal = {
                    id: img.id,
                    title: img.title,
                    descripcion: img.descripcion,
                    url: img.url,
                    tipo: img.tipo
                  };
                  return this.imagenEncontrada.push(this.imagenModal);
                }
              });
            }
          });
        }
      });
      //console.log(this.imagenEncontrada)
    }
  }

  viewImageModal(id: number, title: string, desp: string, url:string, type: number){
    this.imagenModal.id = id;
    this.imagenModal.title = title;
    this.imagenModal.descripcion = desp;
    this.imagenModal.url = url;
    this.imagenModal.tipo = type;
  }

 _isEmpty(value: string): Boolean{
    return (value == "" || value == null)? false : true;
  }
}
