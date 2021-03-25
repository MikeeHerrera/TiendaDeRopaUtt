import { Component, OnInit } from '@angular/core';
import { FirestoresService } from 'src/app/services/firestores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  error;
  loader: boolean;
  count: number =1;
  img: string;
  isProductNew: boolean;

  constructor(private fire : FirestoresService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      if(params.has('id')){
        this.getProduct(params.get('id'))
      }
    })
  }

  async getProduct(id){
    this.loader= true;
    try {
      const response = await this.fire.getProductById(id)
      this.loader= false;
      this.product= response;
      this.img = this.product.info.img
      this.isNew(this.product.id)
    } catch (err) {
      console.error('Ocurrió un error')
    }
  }
  public myFunction(e) {
    this.img = e.target.src
  }

  addCount () {
    this.count++
  }
  decrementCount(){
    this.count!=1 ? this.count-- : this.count = this.count;
  }
  async addToCart (product,count, id) {
    const  carrito = await this.getCart();
    const newProduct = {...product, count, id}
    let newArray = [];
    if(JSON.stringify(carrito) === 'null'){
      newArray.push(newProduct);
      localStorage.setItem('cartUtt', JSON.stringify(newArray))
    }else {
      carrito.map(element => newArray.push(element));
      newArray.push(newProduct);
      localStorage.setItem('cartUtt', JSON.stringify(newArray))
    }
  }
  async isNew(id){
    const cart = await this.getCart()
    if(JSON.stringify(cart) === 'null'){
      this.isProductNew = false
    }else{
      const response = cart.some(element => element.id === id);
      this.isProductNew = response
    }
  }

  async getCart() {
    const carrito = await localStorage.getItem("cartUtt");
    return JSON.parse(carrito);
  }
}
