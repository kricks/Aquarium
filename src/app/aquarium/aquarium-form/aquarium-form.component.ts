import { SharedDataService } from "./../../services/shared-data.service";
import { Router } from "@angular/router";
import { AquariumService } from "../../services/aquarium.service";
import { Aquarium } from "./../aquarium.model";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormControl, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-aquarium-form",
  templateUrl: "./aquarium-form.component.html",
  styleUrls: ["./aquarium-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AquariumFormComponent implements OnInit {
  aquarium: Aquarium = new Aquarium();
  submitted = false;
  aquariumForm: FormGroup;
  private options = ["Fresh Water", "Salt Water", "Brackish Water"];

  constructor(
    private service: AquariumService,
    private router: Router,
    private shared: SharedDataService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.aquarium = {
      aquariumId: null,
      name: "",
      type: "Fresh Water",
      gallon: null,
      notes: "",
      date: null
    };
    //this.shared.currentAq.subscribe(aquarium => (this.aquarium = aquarium));
    // patchVAlues()
  }

  saveAquarium() {
    this.service.createAquarium(this.aquarium).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onAddAquarium(aquarium) {
    this.submitted = true;
    this.saveAquarium();
    this.aquariumDetails(this.aquarium);
    this.shared.confirmation = aquarium;
  }

  onUpdateAquarium(aquariumId) {
    this.shared.changeAquarium(this.aquarium);
    this.service.updateAquarium(aquariumId, this.aquarium).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onClearForm() {}

  aquariumDetails(aquarium) {
    this.router.navigate(["confirmation", aquarium]);
  }

  isAquariumExist() {
  //   this.shared.currentAq.subscribe(data => this.aquarium = data);
  //   if (this.aquarium.aquariumId == null) {
  //     this.aquarium = {
  //       aquariumId: null,
  //       name: "",
  //       type: "Fresh Water",
  //       gallon: null,
  //       notes: "",
  //       date: null
  //     };
  //   } else {
  //     this.shared.currentAq.subscribe(data => this.aquarium = data);
  //   }
  }
}
