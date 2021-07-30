import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoresService } from 'src/app/services/firestores.service';

@Component({
  selector: 'app-pedidos-usuario',
  templateUrl: './pedidos-usuario.component.html',
  styleUrls: ['./pedidos-usuario.component.css']
})
export class PedidosUsuarioComponent implements OnInit {

  constructor(public fire: FirestoresService, public router:Router) { }

  ngOnInit(): void {
    console.log('dataPP', this.fire.pedidosUID())
  }


  mandar(id){
    this.router.navigate(["/pedidosDescription", id]);

  }
}
