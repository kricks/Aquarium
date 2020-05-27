import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Livestock } from 'src/app/modules/aquarium-dashboard/livestock/livestock.model';

@Injectable({
  providedIn: 'root'
})
export class LivestockService {
  livestockList: any = [];

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private baseUri = 'http://localhost:8080/livestock';
  private all = 'all';
  private create = 'create';
  private update = 'update';
  private delete = 'delete';
  private aquariumFkId = 'aqFk';

  getAllLivestock(): Observable<any> {
    return this.http.get(`${this.baseUri}/${this.all}`);
  }

  loadAllLivestock(aquariumFkId) {
    return this.getLivestockByFkId(aquariumFkId).subscribe((data: {}) => {
      this.livestockList = data;
    });
  }

  getLivestockById(livestockId: number): Observable<any> {
    return this.http.get(`${this.baseUri}/${livestockId}`);
  }

  getLivestockByFkId(aquariumFkId: number): Observable<any> {
    return this.http.get(
      `${this.baseUri}/${this.aquariumFkId}/${aquariumFkId}`
    );
  }

  createLivestock(livestock: object): Observable<any> {
    console.log(livestock);
    return this.http.post(`${this.baseUri}/${this.create}`, livestock);
  }

  updateLivestock(livestockId: number, value: any): Observable<any> {
    return this.http.put(
      `${this.baseUri}/${this.update}/${livestockId}`,
      value
    );
  }

  deleteLivestock(livestockId: number): Observable<any> {
    return this.http.delete(`${this.baseUri}/${this.delete}/${livestockId}`);
  }
}
