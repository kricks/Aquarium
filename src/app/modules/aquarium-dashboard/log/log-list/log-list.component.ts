import { Observable } from 'rxjs';
import { HttpLogService } from '../../../../core/services/http-log.service';
import { Component, OnInit, Input } from '@angular/core';
import { Log } from '../log.model';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/core/services/shared-data.service';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss'],
})
export class LogListComponent implements OnInit {
  logs: Observable<Log[]>;
  logList: any = [];
  log: Log = new Log();
  deleteMessage: boolean;
  isDashboard = true;

  constructor(
    private route: ActivatedRoute,
    private service: HttpLogService,
    private shared: SharedDataService,
    private router: Router,
    private dash: DashboardService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const logFk = params.get('fkAquariumId');
      this.displayAllLogs(logFk);
    });
  }

  displayAllLogs(logFk) {
    this.service.getAllLogsByFk(logFk).subscribe(res => {
      this.logList = res;
    });
    this.dash.newLogList$.subscribe(res => this.logList = res);
  }

  viewAll() {
    this.route.paramMap.subscribe((params) => {
      const logFk = params.get('fkAquariumId');
      if (this.isDashboard) {
        this.router.navigate(['log-list', logFk]).then(r => {
          return r;
        });
      } else {
        console.log('view all ' + this.isDashboard);
        this.router.navigate(['aquarium-dashboard', logFk]).then(r => {
          return r;
        });
      }
    });
  }

  onUpdate(log) {
    this.shared.editLogs(log);
  }

  showMessage() {
    this.deleteMessage = false;
  }

  onDelete(logId) {
    this.shared.isDeleting(this.shared.isDelete = true);
    this.service.deleteLog(logId).subscribe(() => {
      this.deleteMessage = true;
      this.ngOnInit();
    });
  }
}
