import { SharedDataService } from "./../../services/shared-data.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Aquarium } from "./../../aquarium/aquarium.model";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { LivestockService } from "src/app/services/livestock.service";
import { Livestock } from "../livestock.model";
import { Observable, Subscription } from "rxjs";
@Component({
  selector: "app-livestock-form",
  templateUrl: "./livestock-form.component.html",
  styleUrls: ["./livestock-form.component.scss"]
})
export class LivestockFormComponent implements OnInit {
  livestock: Livestock = new Livestock();
  form: FormGroup;
  subs: Subscription;
  private options = ["Male", "Female", "N/A"];

  constructor(
    private service: LivestockService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private shared: SharedDataService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let fkAquariumId = params.get("fkAquariumId");
      this.service.loadAllLivestock(fkAquariumId);
      let param = parseInt(fkAquariumId);
      this.createForm(param);
    });
    this.getEditObject();
  }

  createForm(param) {
    this.form = this.fb.group({
      livestockId: null,
      name: ["", Validators.required],
      species: ["", Validators.required],
      gender: ["", Validators.required],
      notes: "",
      fkAquariumId: param
    });
    this.livestock = this.form.value;
  }

  onAddLivestock() {
    this.saveLivestock();
    this.service.getAllLivestock();
  }

  saveLivestock() {
    this.service.createLivestock(this.form.value).subscribe(
      data => {
        this.ngOnInit();
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  onUpdate(livestockId) {
    this.service.updateLivestock(livestockId, this.form.value).subscribe(
      data => {
        this.ngOnInit();
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  getEditObject() {
    let subs = this.shared.editObject.subscribe(data => {
      this.livestock = data;
      this.form = new FormGroup({
        livestockId: new FormControl(this.livestock.livestockId),
        name: new FormControl(this.livestock.name),
        species: new FormControl(this.livestock.species),
        gender: new FormControl(this.livestock.gender),
        notes: new FormControl(this.livestock.notes),
        fkAquariumId: new FormControl(this.livestock.fkAquariumId)
      });
    });
  }
}
