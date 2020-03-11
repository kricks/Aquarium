import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageHttpService {
  private upload = 'uploads';
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  constructor(private storage: AngularFireStorage, private http: HttpClient) { }

  createImage(image) {
    return this.storage.upload(this.upload, image);
    // return this.http.post('uploads')
  }
}
