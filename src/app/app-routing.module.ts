import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { RopaComponent } from './modules/ropa/ropa.component';
import { CompraComponent } from './modules/compra/compra.component';

import { AccesoriosComponent } from './modules/accesorios/accesorios.component';
import { ProductDetailsComponent } from './modules/product-details/product-details.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { RegisterComponent } from './modules/register/register.component';

const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children:[{
   path:'',
   component:HomeComponent
  },
  {
    path: 'accesorios',
    component:AccesoriosComponent
  },
  {
  path: 'ropa',
  component:RopaComponent
  },
  {
    path: 'compra',
    component:CompraComponent
    },
  {
    path: 'product-details',
    component:ProductDetailsComponent
    }]
}, {
  path: '',
  component: FullwidthComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
