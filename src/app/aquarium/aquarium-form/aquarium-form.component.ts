import { logging } from "protractor";
import { Subscription } from "rxjs";
import { SharedDataService } from "./../../services/shared-data.service";
import { Router } from "@angular/router";
import { AquariumService } from "../../services/aquarium.service";
import { Aquarium } from "./../aquarium.model";
import {
  Component,
  OnInit,
  ViewEncapsulation,
  OnDestroy,
  ViewChild,
  Input
} from "@angular/core";
import { FormControl, FormBuilder, FormGroup, NgForm } from "@angular/forms";

@Component({
  selector: "app-aquarium-form",
  templateUrl: "./aquarium-form.component.html",
  styleUrls: ["./aquarium-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AquariumFormComponent implements OnInit, OnDestroy {
  @ViewChild("f", { static: false }) aqForm: NgForm;
  @Input() test: Aquarium;
  aquarium: Aquarium = new Aquarium();
  subs: Subscription;
  private options = ["Fresh Water", "Salt Water", "Brackish Water"];

  constructor(
    private service: AquariumService,
    private router: Router,
    private shared: SharedDataService
  ) {}

  ngOnInit() {
    this.createForm();
    this.getEditItem();
  }

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
    this.service.updateAquarium(aquariumId, this.aquarium).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.createForm();
  }

  aquariumDetails(aquarium) {
    this.router.navigate(["confirmation", aquarium]);
  }

  getEditItem() {
    this.subs = this.shared.editObject.subscribe(
      data => {
        this.aquarium = data;
        console.log(this.aquarium);
        this.aqForm.setValue({
          aquariumId: this.aquarium.aquariumId,
          name: this.aquarium.name,
          type: this.aquarium.type,
          gallon: this.aquarium.gallon,
          notes: this.aquarium.notes,
          date: this.aquarium.date
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
