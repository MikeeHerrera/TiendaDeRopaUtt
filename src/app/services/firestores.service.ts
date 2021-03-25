import { Product } from './../interface/product';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirestoresService {
  constructor(private firestore: AngularFirestore) {}

  refDB = this.firestore.collection(environment.collection);


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
}
