import { AquariumService } from './aquarium.service';
import { LivestockService } from './livestock.service';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Aquarium } from '../aquarium/aquarium.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  aquariums: Observable<Aquarium[]>;
  livestocks: Observable<Livestock[]>;
  aquarium: Aquarium = new Aquarium();
  livestock: Livestock;
  constructor(private aqService: AquariumService, private lsService: LivestockService) { }

    private messageSource = new Subject<string>();
    message$ = this.messageSource.asObservable();

    private id = new Subject<any>();
    currentId = this.id.asObservable();

    sendMessage(message: string) {
      this.messageSource.next(message);  
    }

  getAquariumId(aquariumId) {
    console.log("hi 1");
    this.aqService.getAquariumById(aquariumId).subscribe(data => {
      console.log("hi 2");
      this.aquarium = data;
      console.log("hi 3");
      console.log(data);
    },
    error => console.log("error get aquariumId"));
  }

  getLsAqFk() {
    let id = this.livestock.fkAquariumId;
    this.lsService.getLivestockByFkId(id).subscribe(data => {
      this.aquarium = data;
      console.log(data);
    },
    error => console.log("error get aquariumFkId"));
  }

  equalId(fkAquariumId: number) {
    this.id.next(fkAquariumId);
  }
}
