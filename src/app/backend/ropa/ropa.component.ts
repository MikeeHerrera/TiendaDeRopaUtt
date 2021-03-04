import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthGeneralService } from 'src/app/services/auth/auth-general.service';

;
@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent{
  private image: any;
  $imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion");

formB;
date = Date.now().toString();
dataRopa=[]
status:boolean;
img:any;
fileRef:any;

imgstatus:any;
  constructor(private fb: FormBuilder, private generalService: AuthGeneralService) {
 this.data()
this.status = true;
this.imgstatus = true;

   }
  public newPostForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
     talla: new FormControl('', Validators.required),
    imagePost: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),

  });
  public newPostForm2 = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
     talla: new FormControl('', Validators.required),
     imagePost: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    fileRef:new FormControl('', Validators.required)
  });

  mandar(){
    alert('hola')
  }
  addNewPost(data) {
    // console.log(data)
    console.log('New post', data);
    this.generalService.preAddAndUpdatePost(data, this.image);
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
    console.log(this.image)
   

  }


  data(){
    this.generalService.getRopa().subscribe(data=>{
      console.log(data)

      this.dataRopa =[]
      this.dataRopa.push(data)
    })
  }

  delete(event){
this.generalService.deleteRopa(event)
  }

  editPost(event){

    if(this.imgstatus == true){
      this.generalService.editPostById(event)

    }else{
      console.log(event)
      console.log(this.image)
      let objet  = ({
        descripcion: event.nombre,
        fileRef: event.imagePost,
        id: event.id,

        nombre: event.nombre,
        precio:event.precio,
        talla: event.talla,
      })
    
      this.generalService.preAddAndUpdatePost(objet, this.image);

    }
    // this.generalService.editPostById(event)
    this.status = true;

  }

  editarImage(event){
    this.generalService.deleteImage(event)
    this.imgstatus = false;
  }
  editar(event){
    this.img = event.imagen
    this.fileRef = event.fileRef
    this.status = false;
    console.log('Edit post', event);
    // this.openDialog(post);
    this.newPostForm2.patchValue({
      id: event.id,
      nombre:event.nombre,
    descripcion: event.descripcion,
   talla: event.talla,
   imagen:event.imagen,
    precio:event.precio,
    fileRef:event.imagePost
    });
      }


}
