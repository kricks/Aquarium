import { SharedDataService } from './../../services/shared-data.service';
import { FormGroup, FormControl } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Aquarium } from "./../../aquarium/aquarium.model";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit, ViewEncapsulation, Input, OnDestroy } from "@angular/core";
import { LivestockService } from "src/app/services/livestock.service";
import { Livestock } from "../livestock.model";
import { Observable, Subscription } from "rxjs";
@Component({
  selector: "app-livestock-form",
  templateUrl: "./livestock-form.component.html",
  styleUrls: ["./livestock-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class LivestockFormComponent implements OnInit, OnDestroy {
  livestocks: Observable<Livestock[]>;
  livestock: Livestock = new Livestock();
  form: FormGroup;
  subs: Subscription;
  private options = ["Male", "Female", "N/A"];

  constructor(
    private service: LivestockService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private shared: SharedDataService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let fkAquariumId = params.get("fkAquariumId");
      this.service.loadAllLivestock(fkAquariumId);
      let test = parseInt(fkAquariumId);
      console.log("value " + fkAquariumId);
      this.createForm(test);
    });
    this.getEditObject();
  }

  createForm(param) {
    this.form = this.fb.group({
      livestockId: null,
      name: "",
      species: "",
      gender: "",
      notes: "",
      fkAquariumId: param
    });
  }

  onAddLivestock() {
    this.saveLivestock();
    this.service.getAllLivestock();
  }

  saveLivestock() {
    this.service.createLivestock(this.form.value).subscribe(data => {
      this.ngOnInit();
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  onUpdate(livestockId) {
    livestockId = this.livestock.livestockId;
    console.log("hi " + livestockId);
    this.service.updateLivestock(livestockId, this.form.value).subscribe(data => {
      this.ngOnInit();
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  getEditObject() {
    let subs = this.shared.editObject.subscribe(data => {
      this.livestock = data;
      console.log(this.livestock);
      this.form = new FormGroup({
        'livestockId': new FormControl(this.livestock.livestockId),
        'name': new FormControl(this.livestock.name),
        'species': new FormControl(this.livestock.species),
        'gender': new FormControl(this.livestock.gender),
        'notes': new FormControl(this.livestock.notes),
        'fkAquariumId': new FormControl(this.livestock.fkAquariumId)
      })
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
