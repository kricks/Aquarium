import { SharedDataService } from './../../../../core/services/shared-data.service';
import { HttpLogService } from './../../../../core/services/http-log.service';
import { Component, OnInit } from '@angular/core';
import { Log } from '../log.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent implements OnInit {
  log: Log = new Log();
  form: FormGroup;

  constructor(private fb: FormBuilder, private service: HttpLogService, private shared: SharedDataService) { }

  ngOnInit() {
    this.createForm();
    this.getEditObject();
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
    this.saveLog();
    this.service.getAllLogs();
  }

  saveLog() {
    this.service.createLog(this.form.value).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  onUpdate(logId) {
    this.service.updateLog(logId, this.form.value).subscribe( () => {
      this.ngOnInit();
    });
  }

  getEditObject() {
    this.shared.editLog$.subscribe(data => {
      console.log('log form');
      console.log(data);
      this.log = data;
      this.form = new FormGroup({
        logId: new FormControl(this.log.logId),
        title: new FormControl(this.log.title),
        log: new FormControl(this.log.log),
        date: new FormControl(this.log.date),
      });
    });
  }

  reset() {
    this.createForm();
  }

}
