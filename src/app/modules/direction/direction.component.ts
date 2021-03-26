import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/app/interface/product';
import { AuthGeneralService } from 'src/app/services/auth/auth-general.service';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';
import { FirestoresService } from 'src/app/services/firestores.service';
@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})

export class DirectionComponent implements OnInit {
  direccion:any =[];
  date = Date.now().toString();

  public newPostForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    calle: new FormControl('', Validators.required),
    colonia: new FormControl('', Validators.required),
    numeroI: new FormControl('', Validators.required),
    numeroE: new FormControl('', Validators.required),
    ciudad: new FormControl('', Validators.required),
    cp:  new FormControl('', Validators.required),
    referencia:  new FormControl('', Validators.required)


  });
  constructor(private  fireService: FirestoresService , public  auth: AuthorizationService
    , public authS:AuthGeneralService) {
      this.datas();
this.data()
  }

  ngOnInit(){
  }

  data(){
 let name =localStorage.getItem('name');

    this.newPostForm.patchValue({
    nombre :name,
    id:this.date

    });
  }

  addDirection(data){
    let id =localStorage.getItem('id');

   console.log(data)
   this.authS.saveName(data,id)
  }


  datas(){
    this.authS.datos().subscribe(data=>{
      this.direccion = [];
      this.direccion.push(data[0]);
      console.log(this.direccion)

    })
  }
}
