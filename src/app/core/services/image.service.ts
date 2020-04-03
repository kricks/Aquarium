import { HttpClient } from '@angular/common/http';
import { Image } from './../../modules/image-upload/image.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  collection = this.afs.collection('images');
  images: Observable<any[]>;
  imageDoc: AngularFirestoreDocument<Image>;
  private baseUri = 'http://localhost:8080/image';
  private all = 'all';
  private create = 'create';
  private update = 'update';
  private delete = 'delete';

  constructor(
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private http: HttpClient
  ) {}

  getAll() {
    // this.images = this.collection.valueChanges({ idField: 'imageId' });
    // return this.images;
    return (this.images = this.collection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Image;
          data.imageId = action.payload.doc.id;
          return data;
        });
      })
    ));
  }

  getGeneral() {
    return (this.images = this.afs
      .collection('images')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(action => {
            const data = action.payload.doc.data() as Image;
            data.imageId = action.payload.doc.id;
            return data;
          });
        })
      ));
  }

  getAllImages(): Observable<any> {
    return this.http.get(`${this.baseUri}/${this.all}`);
  }

  createImage(image) {
    this.collection.add(image);
  }

  postImage(image: object): Observable<any> {
    console.log('service hit');
    console.log(image);
    return this.http.post(`${this.baseUri}/${this.create}`, image);
  }

  deleteImage(image: Image) {
    this.imageDoc = this.afs.doc(`images/${image.imageId}`);
    this.imageDoc.delete();
    this.storage.storage.refFromURL(image.imageURL).delete();
  }
}
