import { logging } from "protractor";
import { Subscription, Observable } from "rxjs";
import { SharedDataService } from "./../../services/shared-data.service";
import { Router } from "@angular/router";
import { AquariumService } from "../../services/aquarium.service";
import { Aquarium } from "./../aquarium.model";
import {
  Component,
  OnInit,
  ViewEncapsulation,
  OnDestroy
} from "@angular/core";
import { FormControl, FormBuilder, FormGroup, NgForm } from "@angular/forms";

@Component({
  selector: "app-aquarium-form",
  templateUrl: "./aquarium-form.component.html",
  styleUrls: ["./aquarium-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AquariumFormComponent implements OnInit, OnDestroy {
  title = 'Add New Aquarium';
  aquarium: Aquarium = new Aquarium();
  subs: Subscription;
  form: FormGroup;
  private options = ["Fresh Water", "Salt Water", "Brackish Water"];

  constructor(
    private service: AquariumService,
    private router: Router,
    private shared: SharedDataService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
    this.getEditItem();
  }

  createForm() {
    this.form = this.fb.group({
      aquariumId: null,
      name: "",
      type: "",
      gallon: null,
      notes: "",
      date: null
    });
  }

  saveAquarium() {
    this.service.createAquarium(this.form.value).subscribe(
      data => console.log(data));
  }

  onAddAquarium() {
    this.saveAquarium();
    this.aquariumDetails();
    this.shared.details.next(this.form.value);
  }

  onUpdateAquarium(aquariumId) {
    this.service.updateAquarium(aquariumId, this.form.value).subscribe(data => {
      this.service.loadAllAquariums();
      console.log(data);
    }, error => {
      console.log(error);
    });
    this.createForm();
  }

  aquariumDetails() {
    this.router.navigate(["confirmation"]);
  }

  getEditItem() {
    this.subs = this.shared.editObject.subscribe(
      data => {
        this.aquarium = data;
        console.log(this.aquarium);
        this.form.setValue({
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
