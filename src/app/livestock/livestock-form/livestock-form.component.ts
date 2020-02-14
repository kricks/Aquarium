import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Aquarium } from "./../../aquarium/aquarium.model";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { LivestockService } from "src/app/services/livestock.service";
import { Livestock } from "../livestock.model";
import { Observable } from "rxjs";
@Component({
  selector: "app-livestock-form",
  templateUrl: "./livestock-form.component.html",
  styleUrls: ["./livestock-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class LivestockFormComponent implements OnInit {
  livestocks: Observable<Livestock[]>;
  livestock: Livestock = new Livestock();
  form: FormGroup;
  submitted = false;
  private options = ["Male", "Female", "N/A"];

  constructor(
    private service: LivestockService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let fkAquariumId = params.get("fkAquariumId");
      this.service.loadAllLivestock(fkAquariumId);
      let test = parseInt(fkAquariumId);
      console.log("value " + fkAquariumId);
      // this.livestock = {
      //   livestockId: null,
      //   name: "",
      //   species: "",
      //   gender: "",
      //   notes: "",
      //   fkAquariumId: test
      // };
      this.createForm(test);
    });
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

  //onUpdate() {}
}
