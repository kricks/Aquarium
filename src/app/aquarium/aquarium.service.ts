import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AquariumService {

  constructor() { }

  getAquariums() {
    return ["1", "2", "3"];
  }

}
