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
  private options = ["Fresh Water", "Salt Water", "Brackish Water"];

  constructor(
    private service: AquariumService,
    private router: Router,
    private shared: SharedDataService
  ) {}

  ngOnInit() {
    this.createForm();
    // this.shared.currentAq.subscribe(aquarium => (this.aquariumForm = aquarium));
    // patchVAlues()
  }

  // initForm() {
  //   let aquariumId = '';
  //   if (this.editMode) {
  //     const aq = this.service.getAquariumById(this.id)
  //     aquariumId = this.
  //   }

  //   this.aquariumForm = new FormGroup({
  //     'aquairumId' : new FormControl()
  //   });
  // }

  createForm() {
    this.aquarium = {
            aquariumId: null,
            name: "",
            type: "",
            gallon: null,
            notes: "",
            date: null
          };
  }

  saveAquarium() {
    this.service.createAquarium(this.aquarium).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onAddAquarium(aquarium) {
    this.saveAquarium();
    this.aquariumDetails(this.aquarium);
    this.shared.confirmation = aquarium;
  }

  onUpdateAquarium(aquariumId) {
    // this.shared.changeAquarium(this.aq);
    this.service.updateAquarium(aquariumId, this.aquarium).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onClearForm() {}

  aquariumDetails(aquarium) {
    this.router.navigate(["confirmation", aquarium]);
  }
}
