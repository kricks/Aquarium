import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private newLsList = new Subject<any>();
  newLsList$ = this.newLsList.asObservable();

  private newParamList = new Subject<any>();
  newParamList$ = this.newParamList.asObservable();

  private newLogList = new Subject<any>();
  newLogList$ = this.newLogList.asObservable();


  constructor(private route: ActivatedRoute) {}

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
