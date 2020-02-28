import { NGXLogger } from "ngx-logger";
import { SharedDataService } from "../../../core/services/shared-data.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { LivestockService } from "src/app/core/services/livestock.service";
import { Livestock } from "../livestock.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-livestock-form",
  templateUrl: "./livestock-form.component.html",
  styleUrls: ["./livestock-form.component.scss"]
})
export class LivestockFormComponent implements OnInit {
  livestock: Livestock = new Livestock();
  form: FormGroup;
  subs: Subscription;
  updateMessage: boolean;
  private options = ["Male", "Female", "N/A"];

  constructor(
    private service: LivestockService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private shared: SharedDataService,
    private logger: NGXLogger
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
        this.logger.info(data);
      },
      error => {
        this.logger.error(error);
      }
    );
  }

  onUpdate(livestockId) {
    this.service.updateLivestock(livestockId, this.form.value).subscribe(
      data => {
        this.ngOnInit();
        this.logger.info(data);
        this.updateMessage = true;
      },
      error => {
        this.logger.error(error);
      }
    );
  }

  getEditObject() {
    this.shared.editObject$.subscribe(data => {
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

  showMessage() {
    this.updateMessage = false;
  }

  clearForm() {
    this.ngOnInit();
  }
}
