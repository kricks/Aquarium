import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpParameterService {
  logs: Observable<any[]>;
  paramList: any = [];
  private baseUri = 'http://localhost:8080/parameter';
  private all = 'all';
  private create = 'create';
  private update = 'update';
  private delete = 'delete';
  private parameterFk = 'parameterFk';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUri}/${this.all}`);
  }

  getAllByFk(parameterFk: number): Observable<any> {
    return this.http.get(`${this.baseUri}/${this.parameterFk}`);
  }

  loadAll(parameterFk) {
    return this.getAllByFk(parameterFk).subscribe((data: {}) => {
      this.paramList = data;
    });
  }
  createParameter(parameter: object): Observable<any> {
    return this.http.post(`${this.baseUri}/${this.create}`, parameter);
  }

  updateParameter(parameterId: number, value: any): Observable<any> {
    return this.http.put(
      `${this.baseUri}/${this.update}/${parameterId}`,
      value
    );
  }

  deleteParameter(parameterId: number): Observable<any> {
    return this.http.delete(`${this.baseUri}/${this.delete}/${parameterId}`);
  }
}
