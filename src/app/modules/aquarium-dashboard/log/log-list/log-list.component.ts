import { Observable } from 'rxjs';
import { HttpLogService } from '../../../../core/services/http-log.service';
import { Component, OnInit, Input } from '@angular/core';
import { Log } from '../log.model';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/core/services/shared-data.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
    // if (this.isDashboard) {
    //   console.log('fk ' + this.isDashboard);
    //   this.logs = this.service.getAllLogsByFk(logFk);
    //   // this.service.loadAllLog(logFk);
    // } else {
    //   // this.logs = this.service.getAllLogsByFk(logFk);
    //   console.log('load');
    //   console.log(this.isDashboard);
    //   this.service.loadAllLog(logFk);
    // }
    this.service.getAllLogsByFk(logFk).subscribe(res => {
      this.logList = res;
    });
    this.dash.newLogList$.subscribe(res => this.logList = res);
  }

  // switchMode() {
  //   this.isDashboard = !this.isDashboard;
  // }

  viewAll() {
    this.route.paramMap.subscribe((params) => {
      const logFk = params.get('fkAquariumId');
      if (this.isDashboard) {
        this.router.navigate(['log-list', logFk]);
        console.log('load ' + this.isDashboard);
        // this.switchMode();
      } else {
        console.log('view all ' + this.isDashboard);
        this.router.navigate(['aquarium-dashboard', logFk]);
      }
    });
    // this.log = logsList.map(data => {
    //   this.router.navigate(['logs-list', data.logFk]);
    // });
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
