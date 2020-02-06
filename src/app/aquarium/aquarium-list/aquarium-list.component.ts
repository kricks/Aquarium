import { AquariumListService } from './aquarium-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aquarium-list',
  template: '<h2>{{ title }}</h2>',
  templateUrl: './aquarium-list.component.html',
  styleUrls: ['./aquarium-list.component.scss']
})
export class AquariumListComponent implements OnInit {
  title = "List of Aquariums";
  test;
  constructor(public service: AquariumListService) {}

  ngOnInit() {
    let test = this.service.getAquariums();
  }

}
