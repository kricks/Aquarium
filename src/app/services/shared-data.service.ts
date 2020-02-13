import { Aquarium } from './../aquarium/aquarium.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  aquarium: Aquarium;
  confirmation;

  private aqToUpdate = new BehaviorSubject(this.aquarium);
  currentAq = this.aqToUpdate.asObservable();

  constructor() { }

  changeAquarium(aq: Aquarium) {
    this.aqToUpdate.next(aq)
  }


}
