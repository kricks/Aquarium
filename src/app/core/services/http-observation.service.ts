import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpObservationService {
  observations: Observable<any[]>;
  private baseUri = 'http://localhost:8080/observation';
  private all = 'all';
  private create = 'create';
  private update = 'update';
  private delete = 'delete';
  private obAqFk = 'obAqFk';

  constructor(private http: HttpClient) {}

  getAllObservation(): Observable<any> {
    return this.http.get(`${this.baseUri}/${this.all}`);
  }

  createObservation(observation: object): Observable<any> {
    return this.http.post(`${this.baseUri}/${this.create}`, observation);
  }

}
