import { Product } from './../interface/product';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class FirestoresService {
  constructor(private firestore: AngularFirestore) {}

  refDB = this.firestore.collection(environment.collection);

  sendProduct(product: Product) {
    this.refDB
      .add(product)
      .then(response => {
        console.log(response);
      });
  }

  getProducts() {
    const products = [];
    return new Promise((resolve, reject) => {
      this.refDB.get().subscribe(
        data => {
          data.forEach(hijo => {
            products.push({
              id: hijo.id,
              data: hijo.data()
            });
          });
          resolve(products);
        },
        err => {
          reject('Ocurrio un error');
        }
      );
    });
  }
  async getProduct(id: string) {
    try {
      const data = this.firestore
        .collection(environment.collection)
        .doc(id)
        .get();
      return data;
    } catch (err) {
      return err;
    }
  }
}
