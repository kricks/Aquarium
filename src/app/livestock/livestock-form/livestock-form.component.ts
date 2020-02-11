import { Aquarium } from "./../../aquarium/aquarium.model";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { LivestockService } from "src/app/services/livestock.service";
import { Livestock } from "../livestock.model";
@Component({
  selector: "app-livestock-form",
  templateUrl: "./livestock-form.component.html",
  styleUrls: ["./livestock-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class LivestockFormComponent implements OnInit {
  livestock: Livestock = new Livestock();
  submitted = false;
  private options = ["Male", "Female", "N/A"];

  constructor(
    private service: LivestockService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let fkAquariumId = params.get("fkAquariumId");
      let test = parseInt(fkAquariumId);
      console.log("value " + fkAquariumId);

      this.livestock = {
        livestockId: null,
        name: "",
        species: "",
        gender: "",
        notes: "",
        fkAquariumId: test
      };
    });
  }

  onAddLivestock(fkAquariumId) {
    this.saveLivestock();
  }

  saveLivestock() {
    this.service.createLivestock(this.livestock).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.livestock = new Livestock();
  }

  //onUpdate() {}

  //clearForm() {}
}
