import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Aquarium } from '../aquarium.model';
import { Observable } from 'rxjs';
import { AquariumService } from 'src/app/services/aquarium.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-aquarium-list',
  template: '<h2>{{ title }}</h2>',
  templateUrl: './aquarium-list.component.html',
  styleUrls: ['./aquarium-list.component.scss']
})
export class AquariumListComponent implements OnInit {
  title = "List of Aquariums";
  aquariums: Observable<Aquarium[]>;
  aquarium: Aquarium = new Aquarium();

  constructor(private service: AquariumService, private sharedService: SharedDataService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
    this.sharedService.sendMessage('hi 1');
    this.sharedService.message$.subscribe(data => {
      console.log(data);
    });
  }

  reloadData() {
   this.aquariums = this.service.getAllAquariums();
  }

  onEdit(aquariumId) {
    this.getAquariumById(aquariumId);
    console.log("on edit " + aquariumId);
    this.aquarium = Object.assign([], this.aquarium);
    console.log(this.aquarium);
    // here is where i need to figure out how to populate field

  }

  getAquariumById(aquariumId) {
    this.service.getAquariumById(aquariumId).subscribe(data => {
      this.aquarium = data;
    },
    error => console.log("error get aquariumId"));
  }

  onDelete(aquariumId: number) {
    this.service.deleteAquarium(aquariumId).subscribe(data => {
      this.reloadData();
    },
    error => console.log("on delete error"));
  }

  onView(aquariumId) {
    this.router.navigate(['livestock', aquariumId]);
  }

}
