import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackendComponent } from './backend.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './home/content.component';
import { RopaComponent } from './ropa/ropa.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BackendRoutingModule } from './backend-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  declarations: [
    BackendComponent,
    SidebarComponent,
    ContentComponent,
    RopaComponent,
    AccesoriosComponent,
    OrdersComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    BackendRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BackendModule { }
