import { AquariumFormComponent } from './../aquarium-form/aquarium-form.component';
import { SharedDataService } from "./../../services/shared-data.service";
import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Aquarium } from "../aquarium.model";
import { Observable, Subscription } from "rxjs";
import { AquariumService } from "src/app/services/aquarium.service";

@Component({
  selector: "app-aquarium-list",
  templateUrl: "./aquarium-list.component.html",
  styleUrls: ["./aquarium-list.component.scss"]
})
export class AquariumListComponent implements OnInit{
  
  title = "List of Aquariums";
  aquariums: Observable<Aquarium[]>;
  aquarium: Aquarium = new Aquarium();
  subs: Subscription;

  constructor(
    private service: AquariumService,
    private router: Router,
    private shared: SharedDataService,
  ) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.aquariums = this.service.getAllAquariums();
  }

  onEdit(aquarium) {
    console.log("hello from aq list edit : " + aquarium);
    this.shared.editObject.next(aquarium);
  }

  getAquariumById(aquariumId) {
    this.subs = this.service.getAquariumById(aquariumId).subscribe(
      data => {
        this.aquarium = data;
      },
      error => console.log("error get aquariumId")
    );
  }

  onDelete(aquariumId: number) {
    this.subs = this.service.deleteAquarium(aquariumId).subscribe(
      data => {
        this.reloadData();
      },
      error => console.log("on delete error")
    );
  }

  onView(aquarium) {
    let id = aquarium.aquariumId
    this.shared.confirmation = aquarium;
    this.router.navigate(["livestock", id]);
  }

  // ngOnDestroy(): void {
  //   this.subs.unsubscribe();
  // }
}
