import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoresService } from 'src/app/services/firestores.service';

@Component({
  selector: 'app-pedidos-udescription',
  templateUrl: './pedidos-udescription.component.html',
  styleUrls: ['./pedidos-udescription.component.css']
})
export class PedidosUDescriptionComponent implements OnInit {
data=[];
pedido =[];
  constructor(private route: ActivatedRoute, public fire:FirestoresService) {

  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log(params.id)
      this.fire.getPedidosU(params.id).then(data=>{
        console.log(data)
        this.data.push(data)
        this.data.forEach(data=>{
          console.log(data.info.products)
          this.pedido.push(data.info.products)
        })
      })
    });
  }

}
