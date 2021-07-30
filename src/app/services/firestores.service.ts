import { Product } from './../interface/product';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../../environments/environment.prod';
import { AuthorizationService } from './auth/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoresService {
  pedidos:any =[]=[]
  constructor(private firestore: AngularFirestore ,private authS: AuthorizationService) {}

  refDB = this.firestore.collection(environment.collection);
  refDB2 = this.firestore.collection(environment.collection2);


  sendProduct(product: Product) {
    this.refDB.add(product).then(response => {
      console.log(response);
    });
  }
  getProducts() {
    return new Promise((resolve, reject) => {
      this.refDB.get().subscribe(
        data => {
          resolve(this.armyArray(data));
        },
        err => {
          reject('Ocurrio un error');
        }
      );
    });
  }

  getProductsByCategory(query: string) {
    return new Promise((resolve, reject) => {
      this.firestore
        .collection('products', ref => ref.where('category', '==', query))
        .get()
        .subscribe(
          data => {
            resolve(this.armyArray(data));
          },
          err => {
            reject('Ocurrio un error');
          }
        );
    });
  }
  async getProductById (id:string){
    return new Promise ((resolve, reject) =>{
      this.firestore.collection(environment.collection).doc(id).get().subscribe(
        data =>{
          const info = data.data()
          const id = data.id
          const product = {info, id}
          resolve(product)
        }
      )
    })
  }
  async searchProducts (name: string){
    return new Promise((resolve, reject) => {
      this.firestore
        .collection('products', ref => ref.where('name', '==', name))
        .get()
        .subscribe(
          data => {
            resolve(this.armyArray(data));
          },
          err => {
            reject('Ocurrio un error');
          }
        );
    });
  }
  armyArray(data) {
    const products = [];
    data.forEach(hijo => {
      products.push({
        id: hijo.id,
        data: hijo.data()
      });
    });
    return products || [];
  }


  async pedidosUID(){
  const id =  localStorage.getItem('id')
    console.log(id)
    return new Promise((resolve, reject) => {
      this.firestore
        .collection('pedidos', ref => ref.where('uid', '==',id))
        .get().toPromise().then(data=>{
          this.pedidos = [];

          resolve(this.armyArray(data).find(data=>{
            console.log(data)
            this.pedidos.push(data)
          }))
          console.log(this.pedidos)
        })
    });
  }


  async getPedidosU (id){
    return new Promise ((resolve, reject) =>{
      this.firestore.collection('pedidos').doc(id).get().subscribe(
        data =>{
          const info = data.data()
          const id = data.id
          const product = {info, id}
          resolve(product)
        }
      )
    })
  }
  getPedidosAdmin() {
    return new Promise((resolve, reject) => {
      this.refDB2.get().subscribe(
        data => {
          resolve(this.armyArray(data));
        },
        err => {
          reject('Ocurrio un error');
        }
      );
    });
  }
}


