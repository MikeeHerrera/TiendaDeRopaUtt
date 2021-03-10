import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {NgxPaginationModule} from 'ngx-pagination';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    IvyCarouselModule,
    NgxPaginationModule,
    CarouselModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
  ],

})
export class SharedModule { }
