import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { BackendComponent } from './backend.component';
import { ContentComponent } from './home/content.component';
import { RopaComponent } from './ropa/ropa.component';


const routes: Routes = [
  {
    path: 'admin',
    component: BackendComponent,
    children: [
      {
        path: '',
        component: ContentComponent
      },
      {
        path:'ropa',
        component: RopaComponent
      },
      {
        path: 'accesorios',
        component: AccesoriosComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
