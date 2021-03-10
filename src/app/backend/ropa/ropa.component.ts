import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/app/interface/product';
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
Product: Product
  constructor(private fb: FormBuilder, private generalService: AuthGeneralService) {
 this.data()
this.status = true;
this.imgstatus = true;


   }
  public newPostForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    size: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    category:  new FormControl('', Validators.required)

  });
  public newPostForm2 = new FormGroup({
    id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      size:  new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      price:  new FormControl('', Validators.required),
      category:  new FormControl('', Validators.required),
      state:  new FormControl('', Validators.required),
       stock: new FormControl('', Validators.required),
       porcentage:  new FormControl('', Validators.required),
       discount: new FormControl('', Validators.required),
  });

  mandar(){
    alert('hola')
  }
  addNewPost(data:Product) {
    this.Product = {
      name: data.name,
      category: data.category,
      price: data.price,
      description: data.description,
      size: data.size,
      porcentage: 50,
      img: data.img,
      discount: false,
      state: true,
      stock: 50
    }
    // console.log(data)
    console.log('New post', this.Product);
    this.generalService.preAddAndUpdatePost(this.Product, this.image);
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
    console.log(event)
    if(this.imgstatus == true){
      this.generalService.editPostById(event)

    }else{
      // console.log(event)
      // console.log(this.image)
      // let objet  = ({
        
      //   descripcion: event.nombre,
      //   fileRef: event.imagePost,
      //   id: event.id,

      //   nombre: event.nombre,
      //   precio:event.precio,
      //   talla: event.talla,
      // })
    
      // this.generalService.preAddAndUpdatePost(objet, this.image);

    }
    this.status = true;

  }

  editarImage(event){
    this.generalService.deleteImage(event)
    this.imgstatus = false;
  }
  editar(event){
    console.log(event)
    this.img = event.img
    // this.fileRef = event.fileRef
    this.status = false;
    console.log('Edit post', event);
    // this.openDialog(post);
    this.newPostForm2.patchValue({
      id:event.id,
      name:event.name,
      description:event.description,
      size: event.size,
      img: event.img,
      price: event.price,
      category: event.category,
      state: event.state,
       stock:event.stock,
       porcentage: event.porcentage,
       discount:event.discount
    });
      }


}
