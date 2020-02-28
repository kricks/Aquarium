import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SharedDataService {
  value;
  
  private editObject = new Subject<any>();
  editObject$ = this.editObject.asObservable();

  private details = new BehaviorSubject<any>(this.value);
  details$ = this.details.asObservable();

  constructor() {}

  sendData(data) {
    this.details.next(data);
  }

  editItem(item) {
    this.editObject.next(item);
  }
}
