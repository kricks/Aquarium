import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpLogService {
  logs: Observable<any[]>;
  logsList: any = [];
  private baseUri = 'http://localhost:8080/log';
  private all = 'all';
  private create = 'create';
  private update = 'update';
  private delete = 'delete';
  private logFk = 'logFk';

  constructor(private http: HttpClient) {}

  getAllLogs(): Observable<any> {
    return this.http.get(`${this.baseUri}/${this.all}`);
  }

  getAllLogsByFk(): Observable<any> {
    return this.http.get(`${this.baseUri}/${this.logFk}`);
  }

  loadAllLivestock(logFk) {
    return this.getAllLogsByFk().subscribe((data: {}) => {
      this.logsList = data;
    });
  }
  createLog(log: object): Observable<any> {
    return this.http.post(`${this.baseUri}/${this.create}`, log);
  }

  updateLog(logId: number, value: any): Observable<any> {
    return this.http.put(
      `${this.baseUri}/${this.update}/${logId}`,
      value
    );
  }

  deleteLog(logId: number): Observable<any> {
    return this.http.delete(`${this.baseUri}/${this.delete}/${logId}`);
  }

}
