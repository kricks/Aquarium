import { HttpClient } from '@angular/common/http';
import { Image } from '../../modules/gallery/image.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  images: Observable<any[]>;
  private baseUri = 'http://localhost:8080/image';
  private all = 'all';
  private create = 'create';
  private delete = 'delete';
  private category = 'category';

  constructor(
    private storage: AngularFireStorage,
    private http: HttpClient
  ) {}

  getAllImages(): Observable<any> {
    return this.http.get(`${this.baseUri}/${this.all}`);
  }

  getAllByCategory(category): Observable<any> {
    return this.http.get(`${this.baseUri}/${this.category}/${category}`);
  }

  postImage(image: object): Observable<any> {
    console.log('service hit');
    console.log(image);
    return this.http.post(`${this.baseUri}/${this.create}`, image);
  }

  deleteImage(image: Image): Observable<any> {
    this.storage.storage.refFromURL(image.imageURL).delete();
    const imageId = image.imageId;
    return this.http.delete(`${this.baseUri}/${this.delete}/${imageId}`);
  }

}
