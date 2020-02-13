import { SharedDataService } from "./../../services/shared-data.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Aquarium } from "../aquarium.model";
import { Observable } from "rxjs";
import { AquariumService } from "src/app/services/aquarium.service";

@Component({
  selector: "app-aquarium-list",
  templateUrl: "./aquarium-list.component.html",
  styleUrls: ["./aquarium-list.component.scss"]
})
export class AquariumListComponent implements OnInit {
  title = "List of Aquariums";
  aquariums: Observable<Aquarium[]>;
  aquarium: Aquarium = new Aquarium();

  constructor(
    private service: AquariumService,
    private router: Router,
    private shared: SharedDataService
  ) {}

  ngOnInit() {
    this.reloadData();
    this.shared.currentAq.subscribe(aquarium => (this.aquarium = aquarium));
  }

  reloadData() {
    this.aquariums = this.service.getAllAquariums();
  }

  onEdit(aquarium) {
    // this.getAquariumById(aquariumId);
    // console.log("on edit " + aquariumId);
    // let test = Object.assign({}, this.aquarium);
    // console.log(test);
    this.shared.changeAquarium(aquarium);
  }

  getAquariumById(aquariumId) {
    this.service.getAquariumById(aquariumId).subscribe(
      data => {
        this.aquarium = data;
      },
      error => console.log("error get aquariumId")
    );
  }

  onDelete(aquariumId: number) {
    this.service.deleteAquarium(aquariumId).subscribe(
      data => {
        this.reloadData();
      },
      error => console.log("on delete error")
    );
  }

  onView(aquariumId) {
    this.router.navigate(["livestock", aquariumId]);
  }
}
