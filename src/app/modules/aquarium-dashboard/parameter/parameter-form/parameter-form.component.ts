import { HttpParameterService } from './../../../../core/services/http-parameter.service';
import { Component, OnInit } from '@angular/core';
import { Parameter } from '../parameter.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpLogService } from 'src/app/core/services/http-log.service';
import { SharedDataService } from 'src/app/core/services/shared-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parameter-form',
  templateUrl: './parameter-form.component.html',
  styleUrls: ['./parameter-form.component.scss'],
})
export class ParameterFormComponent implements OnInit {
  parameter: Parameter = new Parameter();
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private service: HttpParameterService,
    private shared: SharedDataService
  ) {}

  ngOnInit() {
    this.getParamFk();
  }

  getParamFk() {
    this.route.paramMap.subscribe((params) => {
      const paramFk = params.get('fkAquariumId');
      this.service.getAllByFk(paramFk);
      // const param = parseInt(paramFk);
      this.createForm(paramFk);
    });
  }

  createForm(param) {
    this.form = this.fb.group({
      parameterId: null,
      paramFk: param,
      date: null,
      ph: null,
      nitrate: null,
      nitrite: null,
      ammonia: null,
      phosphate: null,
      magnesium: null,
      calcium: null,
      potasium: null,
      iodine: null,
      alkalinity: null,
    });
    this.parameter = this.form.value;
  }

  onAddParameter() {
    console.log(this.form.value);
    this.service.createParameter(this.form.value).subscribe((data) => {
      console.log(data);
    });
  }
}
