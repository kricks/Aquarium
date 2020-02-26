import { Subscription } from "rxjs";
import { SharedDataService } from "../../../core/services/shared-data.service";
import { Router } from "@angular/router";
import { AquariumService } from "../../../core/services/aquarium.service";
import { Aquarium } from "../aquarium.model";
import { Component, OnInit, ViewEncapsulation, OnDestroy } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: "app-aquarium-form",
  templateUrl: "./aquarium-form.component.html",
  styleUrls: ["./aquarium-form.component.scss"]
})

export class AquariumFormComponent implements OnInit {
  title = "Add New Aquarium";
  aquarium: Aquarium = new Aquarium();
  subs: Subscription;
  form: FormGroup;
  updateMessage = false;
  private options = ["Fresh Water", "Salt Water", "Brackish Water"];

  constructor(
    private service: AquariumService,
    private router: Router,
    private shared: SharedDataService,
    private fb: FormBuilder,
    private logger: NGXLogger
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
    this.aquarium = this.form.value;
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
        this.logger.info("update");
        this.updateMessage = true;
      },
      error => {
        this.logger.error(error);
      },
      () => {
        this.createForm();
        this.logger.info("update finally block complete");
      }
    );
  }

  aquariumDetails() {
    this.router.navigate(["confirmation"]);
  }

  getEditItem() {
    this.shared.editObject.subscribe(
      data => {
        this.aquarium = data;
        this.logger.info(this.aquarium);
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
        this.logger.error(error);
      }
    );
  }
}
