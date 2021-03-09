import { Component, OnInit } from '@angular/core';
import { FirestoresService } from 'src/app/services/firestores.service';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent implements OnInit {
  pageActual= 1;

  constructor(private  fireService: FirestoresService) { }
  products;
  loader: boolean = true
  error = null

  ngOnInit(): void {
    this.getProducts('Ropa')
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
