import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { RopaComponent } from 'src/app/modules/ropa/ropa.component';
import { AccesoriosComponent } from 'src/app/modules/accesorios/accesorios.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    LoginComponent,
    RopaComponent,
    AccesoriosComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class DefaultModule { }
