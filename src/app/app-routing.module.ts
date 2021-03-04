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
import { createComponent } from '@angular/compiler/src/core';
import { CreateComponent } from './modulesAdmin/create/create.component';

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
    },
  
  {

  path:'agregar',
  component:CreateComponent
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
