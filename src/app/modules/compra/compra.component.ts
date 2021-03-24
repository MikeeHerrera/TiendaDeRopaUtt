import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/interface/product';


declare var paypal;

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  //para monitorear el elemento html , y poder añadir la pasarela de pago
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  constructor() {}

  allProducts: any;
  error: string;
  loader: boolean;
  totalPrice: number;
  //se hace referencia al elemento html

  ngOnInit() {
    paypal
      .Buttons({
        //creando la orden
        style: {
          size: 'responsive',

      },
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: 'Compra de productos tienda UTT',
                amount: {
                  currency_code: 'MXN',
                  value: this.totalPrice
                }
              }
            ]
          });
        },
        //cuando ya se aprobo
        onApprove: async (data, actions) => {
          alert('Se ha realizado su pago correctamente');
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: err => {
          console.log(err);
        }
      })
      //El render recibe el parametro del ID del div donde queremos generar el botón.
      .render(this.paypalElement.nativeElement);
      this.getItems()
  }
  async getItems(){
    this.loader = true
    try {
      const response = await this.getCart();
      this.loader= false
      this.allProducts = response
      this.allProducts.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
      this.getTotal()
    } catch (err) {
      this.loader= false;
      this.error = err;
    }
  }
  async getTotal () {
    const cart = await this.getCart()
    const reducer =(accumulator, currentValue)=> accumulator+ (currentValue.price * currentValue.count)
    this.totalPrice = cart.reduce(reducer, 0);
  }
  async addCount(id) {
    const cart = await this.getCart();
    const allCart = cart.filter(item => item.id != id);
    const product = cart.find(item => item.id === id )
    const addCountToProduct = {...product,'count':product.count+1}
    allCart.push(addCountToProduct);
    await localStorage.setItem("cartUtt", JSON.stringify(allCart));
    this.getItems()
  }
  async decrementCount(id) {
    const cart = await this.getCart();
    const allCart = cart.filter(item => item.id != id);
    const product = cart.find(item => item.id === id )
    const addCountToProduct = {...product,'count':product.count-1}
    allCart.push(addCountToProduct);
    await localStorage.setItem("cartUtt", JSON.stringify(allCart));
    this.getItems()
  }

  async deleteCart (id){
    const carrito = await this.getCart()
    const newCart = carrito.filter(item => item.id!= id);
    await localStorage.setItem("cartUtt", JSON.stringify(newCart));
    this.getItems()
  }
  async getCart() {
    const carrito = await localStorage.getItem("cartUtt");
    return JSON.parse(carrito);
  }
}
