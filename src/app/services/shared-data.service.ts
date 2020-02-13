import { Aquarium } from './../aquarium/aquarium.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  aquarium: Aquarium;
  confirmation;
  private update = new BehaviorSubject(this.aquarium);
  currentAq = this.update.asObservable();

  constructor() { }

  changeAquarium(aq: Aquarium) {
    this.update.next(aq)
  }


}
