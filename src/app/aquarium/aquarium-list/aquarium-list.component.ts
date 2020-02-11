import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Aquarium } from "../aquarium.model";
import { Observable } from "rxjs";
import { AquariumService } from "src/app/services/aquarium.service";

@Component({
  selector: "app-aquarium-list",
  // template: `
  //   <h1>hello</h1>
  //   <app-livestock-form [message]="message"></app-livestock-form>
  // `,
  templateUrl: "./aquarium-list.component.html",
  styleUrls: ["./aquarium-list.component.scss"]
})
export class AquariumListComponent implements OnInit {
  title = "List of Aquariums";
  aquariums: Observable<Aquarium[]>;
  aquarium: Aquarium = new Aquarium();
  message = "message from parent"
  test: number;

  constructor(private service: AquariumService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
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
