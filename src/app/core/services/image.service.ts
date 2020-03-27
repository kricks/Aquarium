import { Image } from './../../modules/image-upload/image.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask
} from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  collection = this.afs.collection('images');
  images: Observable<any[]>;
  imageDoc: AngularFirestoreDocument<Image>;

  constructor(
    private storage: AngularFireStorage,
    private afs: AngularFirestore
  ) {}

  getAll() {
    // this.images = this.collection.valueChanges({ idField: 'imageId' });
    // return this.images;
    return this.images = this.collection.snapshotChanges().pipe(map( changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Image;
        data.imageId = action.payload.doc.id;
        return data;
      });
    }));
  }

  createImage(image) {
    this.collection.add(image);
  }

  deleteImage(image: Image) {
    this.imageDoc = this.afs.doc(`images/${image.imageId}`);
    this.imageDoc.delete();
    this.storage.storage.refFromURL(image.imageURL).delete();
  }
}
