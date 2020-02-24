import { Subscription, Observable } from "rxjs";
import { SharedDataService } from "./../../services/shared-data.service";
import { Router } from "@angular/router";
import { AquariumService } from "../../services/aquarium.service";
import { Aquarium } from "./../aquarium.model";
import { Component, OnInit, ViewEncapsulation, OnDestroy } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { map, filter, catchError, mergeMap, finalize } from "rxjs/operators";
import { DatePipe } from '@angular/common';

@Component({
  selector: "app-aquarium-form",
  templateUrl: "./aquarium-form.component.html",
  styleUrls: ["./aquarium-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AquariumFormComponent implements OnInit, OnDestroy {
  title = "Add New Aquarium";
  aquarium: Aquarium = new Aquarium();
  enableUpdate = this.aquarium.aquariumId;
  subs: Subscription;
  form: FormGroup;
  show = false;
  private options = ["Fresh Water", "Salt Water", "Brackish Water"];

  constructor(
    private service: AquariumService,
    private router: Router,
    private shared: SharedDataService,
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.service.loadAllAquariums();
    this.createForm();
    this.getEditItem();
  }

  createForm() {
    this.form = this.fb.group({
      aquariumId: null,
      name: ["", Validators.required],
      type: ["", Validators.required],
      gallon: [null, Validators.min(0)],
      notes: "",
      date: [null, Validators.required]
    });

    console.log("clear Form");
    console.log(this.form.value);
  }

  saveAquarium() {
    this.service
      .createAquarium(this.form.value)
      .subscribe(data => console.log(data));
  }

  onAddAquarium() {
    this.saveAquarium();
    this.aquariumDetails();
    this.shared.details.next(this.form.value);
  }

  onUpdateAquarium(aquariumId) {
    this.service.updateAquarium(aquariumId, this.form.value).subscribe(
      data => {
        this.service.loadAllAquariums();
        console.log("update");
        console.log(data);
      },
      error => {
        console.log(error);
      },
      () => {
        this.createForm();
        console.log("hi complete");
        console.log(this.aquarium.aquariumId);
      }
    );
  }

  aquariumDetails() {
    this.router.navigate(["confirmation"]);
  }

  getEditItem() {
    this.subs = this.shared.editObject.subscribe(
      data => {
        this.aquarium = data;
        // let date = this.datePipe.transform(this.aquarium.date, 'yyyy-MM-dd');
        console.log(this.aquarium);
        this.form = new FormGroup({
          aquariumId: new FormControl(this.aquarium.aquariumId),
          name: new FormControl(this.aquarium.name),
          type: new FormControl(this.aquarium.type),
          gallon: new FormControl(this.aquarium.gallon),
          notes: new FormControl(this.aquarium.notes),
          date: new FormControl(this.aquarium.date)
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  clearForm() {
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
