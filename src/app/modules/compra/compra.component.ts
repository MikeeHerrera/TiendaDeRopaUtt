import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { async } from 'q';

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
  producto = {
    description: 'producto',
    precio: 300,
    img: 'imagen del producto'
  };

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
                description: this.producto.description,
                amount: {
                  currency_code: 'MXN',
                  value: this.producto.precio
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
  }
}
