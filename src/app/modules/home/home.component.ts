import { Component, OnInit } from '@angular/core';
 import { OwlOptions } from 'ngx-owl-carousel-o';
import { FirestoresService } from 'src/app/services/firestores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions  = {
    loop: true,
    mouseDrag:true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true

  }



  constructor(private firestoreService: FirestoresService) { }
  products;
  products2;
  products3;

  twoProducts=[]
  error =null;
  loader: boolean = true;


  ngOnInit(){
    // this.getProducts();
    this.accesories();
    this.ropa();
  }
  async getProducts (){
    this.loader=true;
    this.error= null
    if (!this.products){
      try{
        const response = await this.firestoreService.getProducts()
        this.loader = false;
        this.firstProducts(response)
      }catch(err){
        this.loader= false
        this.error= err
      }
    }
  }
  firstProducts(products){
    for(let i=0; i<2; i++){
      this.twoProducts.push(products[i])
    }
    this.deleteProductsArray(products,this.twoProducts[0].id,this.twoProducts[1].id);
  }
  deleteProductsArray(productsAll, id1, id2){
   const result= productsAll.filter(productsNew =>{
      return productsNew.id != id1 && productsNew.id != id2
    })
    this.products = result;
  }

  async accesories(){
    this.products2 = [];
    const data =
    await  this.firestoreService.getProductsByCategory('accesorios');
     this.products2 = data;
     console.log(this.products2 );

  }


  async ropa(){
    this.products3 = [];
    const data =
    await  this.firestoreService.getProductsByCategory('ropa');
     this.products3 = data;
     console.log(this.products3 );

  }
}

