import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  img: string = '../../../assets/products-images/photo-1610901119319-f7cc8281869c.jpg'
  constructor() {}

  ngOnInit(): void {}

  public myFunction(e) {
    this.img = e.target.src
  }
}
