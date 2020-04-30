import { Observable } from 'rxjs';
import { HttpLogService } from '../../../../core/services/http-log.service';
import { Component, OnInit } from '@angular/core';
import { Log } from '../log.model';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/core/services/shared-data.service';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss']
})
export class LogListComponent implements OnInit {

  logs: Observable<Log[]>;
  constructor(private service: HttpLogService, private router: Router, private shared: SharedDataService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAllLogs().subscribe(data => {
      console.log(data);
      this.logs = data;
    });
  }

  onUpdate(log) {
    this.shared.editLogs(log);
    console.log('log list update hit');
  }

  onDelete(logId) {
    console.log(logId);
    this.service.deleteLog(logId).subscribe(() => {
      this.ngOnInit();
    });
  }
}
