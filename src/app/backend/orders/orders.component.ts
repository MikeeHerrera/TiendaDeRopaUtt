import { Component, OnInit } from '@angular/core';
import { FirestoresService } from 'src/app/services/firestores.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  dataA =[]
  constructor(private fire:FirestoresService) { }

  ngOnInit(){
    this.data()
  }



  data(){
    this.fire.getPedidosAdmin().then(data=>{
      this.dataA.push(data);
      console.log(this.dataA)

    });

  }
}
