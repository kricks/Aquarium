import { Observable } from 'rxjs';
import { HttpLogService } from '../../../../core/services/http-log.service';
import { Component, OnInit } from '@angular/core';
import { Log } from '../log.model';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/core/services/shared-data.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss'],
})
export class LogListComponent implements OnInit {
  logs: Observable<Log[]>;
  log: Log;
  newLog: any = [];
  isDashboard = true;
  constructor(
    private route: ActivatedRoute,
    private service: HttpLogService,
    private router: Router,
    private shared: SharedDataService,
    private session: SessionStorageService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const logFk = params.get('fkAquariumId');
      this.getAllFk(logFk);
    });
  }

  getAll() {
    this.service.getAllLogs().subscribe((data) => {
      this.logs = data;
    });
  }

  getAllFk(logFk) {
    this.service.getAllLogsByFk(logFk).subscribe(data => {
      this.logs = data;
    });
  }

  onUpdate(log) {
    this.shared.editLogs(log);
  }

  onDelete(logId) {
    console.log(logId);
    this.service.deleteLog(logId).subscribe(() => {
      this.ngOnInit();
    });
  }
}
