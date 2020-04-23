import { HttpLogService } from './../../../../core/services/http-log.service';
import { Component, OnInit } from '@angular/core';
import { Log } from '../log.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent implements OnInit {
  log: Log = new Log();
  form: FormGroup;

  constructor(private fb: FormBuilder, private service: HttpLogService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      logId: null,
      title: null,
      log: null,
      date: null
    });
    this.log = this.form.value;
  }

  onAddLog() {
    this.service.createLog(this.form.value).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
