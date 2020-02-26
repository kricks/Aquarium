import { Aquarium } from "../../aquarium/aquarium.model";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, Subscription } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SharedDataService {
  aquarium: Aquarium;
  editObject = new Subject<any>();
  details = new BehaviorSubject<any>(this.aquarium);

  constructor() {}
}
