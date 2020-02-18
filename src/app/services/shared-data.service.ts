import { Aquarium } from './../aquarium/aquarium.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  aquarium: Aquarium;
  test: Aquarium[] = [];
  confirmation;
  startedEditing = new Subject<any>();

  stuffs = new Subject<any>();

  aqToUpdate = new BehaviorSubject(this.test);
  currentAq = this.aqToUpdate.asObservable();

  constructor() { }

  changeAquarium(aq) {
    this.aqToUpdate.next(aq)
  }

  getAquariumItem(aquariumId) {
    return this.test[aquariumId];
  }


}
