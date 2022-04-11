import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment.prod";

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

  getAllLogsByFk(logFk): Observable<any> {
    return this.http.get(`${this.baseUri}/${this.logFk}/${logFk}`);
  }

  loadAllLog(logFk) {
    return this.getAllLogsByFk(logFk).subscribe((data: []) => {
      this.logsList = data.splice(data.length - 3);
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
