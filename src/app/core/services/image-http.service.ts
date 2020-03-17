import { Injectable } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask
} from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ImageHttpService {
  private upload = 'uploads';
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  imageDetailList: AngularFireList<any>;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFireDatabase,
    private http: HttpClient,
    private afs: AngularFirestore
  ) {}

  createImage(image) {
    return this.storage.upload(this.upload, image);
    // return this.http.post('uploads')
  }

  getDetailList() {
    this.imageDetailList = this.db.list('images');
  }

  pushDetailList(imageDetail) {
    this.imageDetailList.push(imageDetail);
  }

  pushImage(image) {
    this.afs.collection('images').add(image);
  }
}
