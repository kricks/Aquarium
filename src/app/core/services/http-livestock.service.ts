import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root'
})
export class LivestockService {
  livestockList: any = [];

  private changedList = new Subject<any>();
  changedList$ = this.changedList.asObservable();

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

  sendChangedList(data) {
    this.changedList.next(data);
  }

  getAllLivestock(): Observable<any> {
    return this.http.get(`${this.baseUri}/${this.all}`);
  }

  loadAllLivestock(aquariumFkId) {
    // return this.getLivestockByFkId(aquariumFkId).subscribe((data) => {
    //   this.sendChangedList(data);
    // });
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
