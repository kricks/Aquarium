import { FormBuilder} from '@angular/forms';
import { Aquarium } from "../../modules/aquarium/aquarium.model";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SharedDataService {
  aquarium: Aquarium;
  
  private editObject = new Subject<any>();
  editObject$ = this.editObject.asObservable();

  private details = new BehaviorSubject<any>(this.aquarium);
  details$ = this.details.asObservable();

  constructor(private fb: FormBuilder) {}

  sendData(data) {
    this.details.next(data);
  }

  editItem(item) {
    this.editObject.next(item);
  }
}
