import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent implements OnInit {
  pageActual=1;
  imgs= [
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
    {img: "../../../assets/accesorios/baso.jpg"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
