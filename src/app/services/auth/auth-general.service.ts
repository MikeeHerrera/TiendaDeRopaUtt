import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { Post } from '../../models/post';

import { AngularFireStorage } from '@angular/fire/storage';
import { Product } from 'src/app/interface/product';
@Injectable({
  providedIn: 'root'
})
export class AuthGeneralService {

  private postsCollection: AngularFirestoreCollection<Post>;
  private filePath: any;
  date = Date.now().toString();

  private downloadURL: Observable<string>;
  constructor(    private storage: AngularFireStorage,
    private firestore: AngularFirestore
    ) { }

  public preAddAndUpdatePost(post:Product, image): void {
    console.log(post, image)
    this.uploadImage(post, image);
  }

  private uploadImage(post:Product, image) {
    this.filePath = `img/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            this.downloadURL = urlImage;
            this.savePost(post);
          });
        })
      ).subscribe();
  }

  private savePost(data: Product) {

    // post.img   =this.downloadURL
    // console.log('echo',post.id)
    const postObj = {
      name: data.name,
      category: data.category,
      price: data.price,
      description: data.description,
      size: data.size,
      porcentage: 50,
      img: this.downloadURL,
      discount: false,
      state: true,
      stock: 50
    };
    // if (post.id) {
    //   this.firestore.collection("ropa").doc(post.id).update(post)

    //   // return this.postsCollection.doc(post.id).update(postObj);
    // } else {
    //     }

    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("products")
          .add(postObj)
          .then(res => {}, err => reject(err));
  });
  }


  //Metodo para cargar datos de la collección Ropa
  public getRopa(): Observable<Post[]> {
    return this.firestore.collection("products")
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as Post;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  //eliminar alguna ropa

  deleteRopa (id) {

        this.firestore
        .collection ("products")
        .doc (id)
        .delete ();
 }


 //editarRopa

 public editPostById(post: Post) {
   console.log(post.id)
this.firestore.collection("products").doc(post.id).update(post)

}

//eliminar imagen de storage

deleteImage(event){
  this.storage.ref(event).delete();
}



 save(data) {

  return new Promise<any>((resolve, reject) =>{
    this.firestore
        .collection("pedidos")
        .add(data)
        .then(res => {}, err => reject(err));
});
}

}
