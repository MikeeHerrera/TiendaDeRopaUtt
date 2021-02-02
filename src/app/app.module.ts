import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { CompraComponent } from './modules/compra/compra.component';
import { ProductDetailsComponent } from './modules/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CompraComponent,
    ProductDetailsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
