import { Component, OnInit } from '@angular/core';
import { FirestoresService } from 'src/app/services/firestores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private firestoreService: FirestoresService) { }
  products;

  ngOnInit(){
    this.getProducts()
  }
  getProducts (){
    this.firestoreService.getProducts().then(data =>{
      this.products = data;
      console.log(this.products)
    }).catch(err =>{
      console.error(err)
    })
  }

}
