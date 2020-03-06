import { Image } from './../../modules/image-upload/image.model';
import { Aquarium } from "../../modules/aquarium/aquarium.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AquariumService {
  aquariumList: any = [];
  image: Image = new Image();
  aquarium: Aquarium = new Aquarium();
  constructor(private http: HttpClient) {}

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     "Content-Type": "application/json"
  //   })
  // };
  
  private baseUri = "http://localhost:8080/aquarium";
  private url = "http://localhost:8080/image";
  private all = "all";
  private create = "create";
  private update = "update";
  private delete = "delete";

  getAllAquariums(): Observable<any> {
    return this.http.get(`${this.baseUri}/${this.all}`);
  }

  getAquariumById(aquariumId: number): Observable<any> {
    return this.http.get(`${this.baseUri}/${aquariumId}`);
  }

  createAquarium(aquarium: Object): Observable<any> {
    console.log(aquarium);
    return this.http.post(`${this.baseUri}/${this.create}`, aquarium);
  }

  updateAquarium(aquariumId: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUri}/${this.update}/${aquariumId}`, value);
  }

  deleteAquarium(aquariumId: number): Observable<any> {
    return this.http.delete(`${this.baseUri}/${this.delete}/${aquariumId}`);
  }

  upload(image: Object): Observable<any> {
    return this.http.post(`${this.url}/${this.create}`, image);
  }

  getImage(imageName: string): Observable<any> {
    // return this.http.get(`${this.url}/${imageName}`, {responseType: 'blob'});
    console.log("hit");
    return this.http.get(`${this.url}/${imageName}`);
  }

  getAllImages(): Observable<any> {
    return this.http.get(`${this.url}/${this.all}`);
  }

  loadAllAquariums() {
    return this.getAllAquariums().subscribe((data: {}) => {
      this.aquariumList = data;
    });
  }
}
