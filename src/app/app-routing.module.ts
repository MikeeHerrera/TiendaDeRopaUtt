import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { RopaComponent } from './modules/ropa/ropa.component';
import { CompraComponent } from './modules/compra/compra.component';
import { AccesoriosComponent } from './modules/accesorios/accesorios.component';
import { ProductDetailsComponent } from './modules/product-details/product-details.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { DirectionComponent } from './modules/direction/direction.component';
import { BackendComponent } from './backend/backend.component';
import { ContentComponent } from './backend/home/content.component';
import { PedidosUsuarioComponent } from './modules/pedidos-usuario/pedidos-usuario.component';
import { PedidosUDescriptionComponent } from './modules/pedidos-udescription/pedidos-udescription.component';

const routes: Routes = [
{
  path: '',
  component: DefaultComponent,
  children: [
    {
    path: '',
    component: HomeComponent
  },
  {
    path: 'accesorios',
    component: AccesoriosComponent
  },
  {
    path: 'ropa',
    component: RopaComponent
  },
  {
    path: 'compra',
    component: CompraComponent
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'direccion',
    component: DirectionComponent
  },
  {
    path: 'pedidosU',
    component:PedidosUsuarioComponent
  },
  {
    path: 'pedidosDescription/:id',
    component:PedidosUDescriptionComponent
  }
]
}, {
  path: '',
  loadChildren: () => import('./layouts/fullwidth/fullwidth.module').then(m => m.FullwidthModule)
},
{
  path: '',
  loadChildren: () => import('./backend/backend.module').then(m => m.BackendModule)
},
{ path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
