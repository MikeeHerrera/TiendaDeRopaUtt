import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/interface/product';
import { AuthGeneralService } from 'src/app/services/auth/auth-general.service';
import { AuthorizationService } from 'src/app/services/auth/authorization.service';
import { FirestoresService } from 'src/app/services/firestores.service';
import swal from'sweetalert2';


declare var paypal;

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  titularAlerta :string;

  //para monitorear el elemento html , y poder añadir la pasarela de pago
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  constructor(public auth:AuthGeneralService , private AuthS : AuthorizationService,
    private router:Router, private service:FirestoresService) {}
direccion:any =[];
  allProducts: any;
  error: string;
  loader: boolean;
  totalPrice: number;
  todo=[];
  pedidos =[];
  //se hace referencia al elemento html

  ngOnInit() {


    this.datas();
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
          const order = await actions.order.capture();
          console.log(order);
          this.pagar();
          swal.fire('Pedido enviado con exito..', this.titularAlerta, 'success');
          this.router.navigate(['./']);
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
      console.log(response)
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
    console.log(this.totalPrice)
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


  pagar(){
    this.todo.push({products:this.allProducts , total:this.totalPrice ,
     envio: this.direccion , uid:this.AuthS.uid} );
    console.log('carrito'+this.allProducts)
     this.auth.save(this.todo[0])
    localStorage.removeItem('cartUtt')
    this.router.navigate(['./'])
  }

  datas(){
    this.auth.datos().subscribe(data=>{
      this.direccion = [];
      this.direccion.push(data[0]);
      console.log(this.direccion)

    });
    // this.pedidos =[ ];
    // this.pedidos.push(this.service.pedidosUID());
    // console.log(this.pedidos)
    console.log('mis pedidos',this.service.pedidosUID())
  }
}
