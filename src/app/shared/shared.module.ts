import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {NgxPaginationModule} from 'ngx-pagination';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    IvyCarouselModule,
    NgxPaginationModule,
    CarouselModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SpinnerComponent
  ],

})
export class SharedModule { }
