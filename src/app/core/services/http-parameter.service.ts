import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpParameterService {

  private baseUri = 'http://localhost:8080/parameter';
  private all = 'all';
  private create = 'create';
  private update = 'update';
  private delete = 'delete';
  private parameterFk = 'parameterFk';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUri}/${this.all}`);
  }

  getAllByFk(parameterFk): Observable<any> {
    return this.http.get(`${this.baseUri}/${this.parameterFk}/${parameterFk}`);
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
