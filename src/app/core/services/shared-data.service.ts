import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  value;
  isDelete: boolean;
  foreignKey;

  private deleteAndClearForm = new BehaviorSubject<any>(this.isDelete);
  deleteAndClearForm$ = this.deleteAndClearForm.asObservable();

  private editObject = new Subject<any>();
  editObject$ = this.editObject.asObservable();

  private details = new BehaviorSubject<any>(this.value);
  details$ = this.details.asObservable();

  private getUpdatedAqList = new Subject<any>();
  getUpdatedAqList$ = this.getUpdatedAqList.asObservable();

  private getCategoryList = new Subject<any>();
  getCategoryList$ = this.getCategoryList.asObservable();

  constructor() {}

  sendData(data) {
    this.details.next(data);
  }

  editItem(item) {
    this.editObject.next(item);
  }

  isDeleting(value) {
    this.deleteAndClearForm.next(value);
  }

  getAqList() {
    this.getUpdatedAqList.next();
  }

  getCategory(form) {
    this.getCategoryList.next(form);
  }
}
