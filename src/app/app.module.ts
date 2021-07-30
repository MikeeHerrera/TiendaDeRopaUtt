import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FullwidthModule } from './layouts/fullwidth/fullwidth.module';
import {environment} from '../environments/environment.prod'
import {AngularFireModule} from '@angular/fire';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { AuthorizationService } from './services/auth/authorization.service';
import { BackendModule } from './backend/backend.module';
import { DirectionComponent } from './modules/direction/direction.component';
import { FormsModule, } from '@angular/forms';
import { PedidosUsuarioComponent } from './modules/pedidos-usuario/pedidos-usuario.component';
import { PedidosUDescriptionComponent } from './modules/pedidos-udescription/pedidos-udescription.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectionComponent,
    PedidosUsuarioComponent,
    PedidosUDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    DefaultModule,
    FullwidthModule,
    BackendModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
