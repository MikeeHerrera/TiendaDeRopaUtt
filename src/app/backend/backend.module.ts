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



@NgModule({
  declarations: [
    BackendComponent,
    SidebarComponent,
    ContentComponent,
    RopaComponent,
    AccesoriosComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    BackendRoutingModule,
<<<<<<< HEAD

=======
    ReactiveFormsModule
>>>>>>> 4e6cc99705de3a67613ee9e70fc9d9fd00b19f72
  ]
})
export class BackendModule { }
