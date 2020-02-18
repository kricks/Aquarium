import { Aquarium } from './../aquarium/aquarium.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  confirmation;
  editObject = new Subject<any>();

  constructor() { }

}
