import { Component, OnInit } from '@angular/core';
import { Parameter } from '../parameter.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpLogService } from 'src/app/core/services/http-log.service';
import { SharedDataService } from 'src/app/core/services/shared-data.service';

@Component({
  selector: 'app-parameter-form',
  templateUrl: './parameter-form.component.html',
  styleUrls: ['./parameter-form.component.scss']
})
export class ParameterFormComponent implements OnInit {
  parameter: Parameter = new Parameter();
  form: FormGroup;

  constructor(private fb: FormBuilder, private service: HttpLogService, private shared: SharedDataService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      parameterId: null,
      aqFk: null,
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
  }

}
