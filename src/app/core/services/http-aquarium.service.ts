import { Aquarium } from '../../modules/aquarium/aquarium.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AquariumService {
  aquariumList: any = [];
  aquarium: Aquarium = new Aquarium();
  private baseUri = 'http://localhost:8080/aquarium';
  private all = 'all';
  private create = 'create';
  private update = 'update';
  private delete = 'delete';

  constructor(private http: HttpClient) {}

  getAllAquariums(): Observable<any> {
    return this.http.get(`${this.baseUri}/${this.all}`);
  }

  getAquariumById(aquariumId: number): Observable<any> {
    return this.http.get(`${this.baseUri}/${aquariumId}`);
  }

  createAquarium(aquarium: object): Observable<any> {
    return this.http.post(`${this.baseUri}/${this.create}`, aquarium);
  }

  updateAquarium(aquariumId: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUri}/${this.update}/${aquariumId}`, value);
  }

  deleteAquarium(aquariumId: number): Observable<any> {
    return this.http.delete(`${this.baseUri}/${this.delete}/${aquariumId}`);
  }

  loadAllAquariums() {
    return this.getAllAquariums().subscribe((data: {}) => {
      this.aquariumList = data;
    });
  }
}
