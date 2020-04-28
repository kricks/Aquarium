import { Observable } from 'rxjs';
import { HttpLogService } from '../../../../core/services/http-log.service';
import { Component, OnInit } from '@angular/core';
import { Log } from '../log.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss']
})
export class LogListComponent implements OnInit {

  logs: Observable<Log[]>;
  constructor(private service: HttpLogService, private router: Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAllLogs().subscribe(data => {
      console.log(data);
      this.logs = data;
    });
  }

  addLog() {
    this.router.navigate(['aquarium-dashboard']);
  }
}
