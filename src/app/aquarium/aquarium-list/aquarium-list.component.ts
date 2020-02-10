import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Aquarium } from '../aquarium.model';
import { Observable } from 'rxjs';
import { AquariumService } from '../aquarium.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-aquarium-list',
  template: '<h2>{{ title }}</h2>',
  templateUrl: './aquarium-list.component.html',
  styleUrls: ['./aquarium-list.component.scss']
})
export class AquariumListComponent implements OnInit {
  title = "List of Aquariums";
  aquariums: Observable<Aquarium[]>;

  constructor(private service: AquariumService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.aquariums = this.service.getAllAquariums();

    // this.service.getAllAquariums().subscribe((res: any) => {
    //   this.aquariums = res;
    //   console.log(this.aquariums);
    //   }, err => {
    //     console.log(err);
    //   });
  }

  onEdit(aquariumId: number, value: any) {
    this.service.updateAquarium(aquariumId, value).subscribe()
  }

  onDelete(aquariumId: number) {
    this.service.deleteAquarium(aquariumId).subscribe(data => {
      this.reloadData();
    },
    error => console.log("on delete error"));
  }

  onView(aquariums) {
    this.router.navigate(['livestock', aquariums]);
  }

}
