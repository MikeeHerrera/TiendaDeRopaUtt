import { Component, OnInit } from '@angular/core';
import { FirestoresService } from 'src/app/services/firestores.service';
@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent implements OnInit {
  pageActual=1;
  imgs=[
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/baso.jpg"},
    {img: "../../../assets/accesorios/bolsa.jpg"},
    {img: "../../../assets/accesorios/gorra.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/baso.jpg"},
    {img: "../../../assets/accesorios/bolsa.jpg"},
    {img: "../../../assets/accesorios/gorra.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/baso.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/baso.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/baso.jpg"},
    {img: "../../../assets/accesorios/bolsa.jpg"},
    {img: "../../../assets/accesorios/gorra.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/baso.jpg"},
    {img: "../../../assets/accesorios/bolsa.jpg"},
    {img: "../../../assets/accesorios/gorra.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/baso.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/baso.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/baso.jpg"},
    {img: "../../../assets/accesorios/bolsa.jpg"},
    {img: "../../../assets/accesorios/gorra.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/baso.jpg"},
    {img: "../../../assets/accesorios/bolsa.jpg"},
    {img: "../../../assets/accesorios/gorra.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/baso.jpg"},
    {img: "../../../assets/accesorios/bolsa.jpg"},
    {img: "../../../assets/accesorios/gorra.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/baso.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/baso.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/baso.jpg"},
    {img: "../../../assets/accesorios/bolsa.jpg"},
    {img: "../../../assets/accesorios/gorra.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/baso.jpg"},
    {img: "../../../assets/accesorios/bolsa.jpg"},
    {img: "../../../assets/accesorios/gorra.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/baso.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/baso.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/baso.jpg"},
    {img: "../../../assets/accesorios/bolsa.jpg"},
    {img: "../../../assets/accesorios/gorra.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},
    {img: "../../../assets/accesorios/libreta.jpg"},

  ]

  constructor(private  fireService: FirestoresService) { }
  products;
  loader: boolean = true
  error = null

  ngOnInit(): void {
    this.getProducts('Accesorios')
  }
  async getProducts(query: string){
    this.loader= true
    this.error = null
    try{
      const newQuery = query.toLowerCase()
      const response = await this.fireService.getProductsByCategory(newQuery)
      this.loader= false
      this.products = response
    }catch(err){
      this.loader= false
      this.error = err;
    }
  }

}
