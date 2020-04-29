import { NGXLogger } from 'ngx-logger';
import { SharedDataService } from '../../../../core/services/shared-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LivestockService } from 'src/app/core/services/http-livestock.service';
import { Livestock } from '../livestock.model';

@Component({
  selector: 'app-livestock-form',
  templateUrl: './livestock-form.component.html',
  styleUrls: ['./livestock-form.component.scss']
})
export class LivestockFormComponent implements OnInit {
  livestock: Livestock = new Livestock();
  form: FormGroup;
  updateMessage: boolean;
  options = ['Male', 'Female', 'N/A'];

  constructor(
    private service: LivestockService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private shared: SharedDataService,
    private logger: NGXLogger
  ) {}

  ngOnInit() {
    this.getFkAquariumId();
    this.getEditObject();
    this.isDelete();
  }

  getFkAquariumId() {
    this.route.paramMap.subscribe(params => {
      const fkAquariumId = params.get('fkAquariumId');
      this.service.loadAllLivestock(fkAquariumId);
      const param = parseInt(fkAquariumId);
      this.createForm(param);
    });
  }

  createForm(param) {
    this.form = this.fb.group({
      livestockId: null,
      name: ['', [Validators.required]],
      species: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      notes: '',
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
        // this.logger.info(data);
        console.log(data);
      },
      error => {
        // this.logger.error(error);
        console.log(error);
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
      console.log('hit 2');
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

  closeMessage() {
    this.updateMessage = false;
  }

  clearForm() {
    this.getFkAquariumId();
  }

  isDelete() {
    this.shared.deleteAndClearForm$.subscribe(data => {
      this.shared.isDelete = data;
      if (this.shared.isDelete === true) {
        this.clearForm();
      }
    });
  }
}
