import { AquariumService } from './aquarium.service';
import { Component, OnInit } from '@angular/core';
import { Aquarium } from './aquarium.model';

@Component({
  selector: 'app-aquarium',
  template: '<h2>{{ title }}</h2>',
  templateUrl: './aquarium.component.html',
  styleUrls: ['./aquarium.component.scss']
})
export class AquariumComponent implements OnInit {
  title = "List of Aquariums";
  aquariums: Aquarium[] = [];

  constructor(service: AquariumService) {
    this.aquariums = service.getAquariums();
   }

  ngOnInit() {
  }

}
