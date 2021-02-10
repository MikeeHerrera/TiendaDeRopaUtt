import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { RopaComponent } from 'src/app/modules/ropa/ropa.component';
import { AccesoriosComponent } from 'src/app/modules/accesorios/accesorios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompraComponent } from 'src/app/modules/compra/compra.component';
import { ProductDetailsComponent } from 'src/app/modules/product-details/product-details.component';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    RopaComponent,
    AccesoriosComponent,
    CompraComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class DefaultModule { }
