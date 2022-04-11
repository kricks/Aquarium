import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  value: any = '';

  private newLsList = new BehaviorSubject<any>(this.value);
  newLsList$ = this.newLsList.asObservable();

  private newParamList = new Subject<any>();
  newParamList$ = this.newParamList.asObservable();

  private newLogList = new BehaviorSubject<any>(this.value);
  newLogList$ = this.newLogList.asObservable();


  constructor() {}

  sendNewLsList(data) {
    this.newLsList.next(data);
  }

  sendNewParamList(data) {
    this.newParamList.next(data);
  }

  sendNewLogList(data) {
    this.newLogList.next(data);
  }
}
