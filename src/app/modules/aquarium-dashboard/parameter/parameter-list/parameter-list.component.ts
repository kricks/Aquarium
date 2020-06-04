import { ActivatedRoute } from '@angular/router';
import { DashboardService } from './../../dashboard.service';
import { Observable } from 'rxjs';
import { HttpParameterService } from './../../../../core/services/http-parameter.service';
import { Component, OnInit } from '@angular/core';
import { Parameter } from '../parameter.model';

@Component({
  selector: 'app-parameter-list',
  templateUrl: './parameter-list.component.html',
  styleUrls: ['./parameter-list.component.scss'],
})
export class ParameterListComponent implements OnInit {
  parameters: Observable<Parameter[]>;
  paramList: any = [];

  constructor(
    private service: HttpParameterService,
    private dash: DashboardService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getParamFk();
  }

  getParamFk() {
    this.route.paramMap.subscribe((params) => {
      const paramFk = params.get('fkAquariumId');
      this.displayParams(paramFk);
    });
  }

  displayParams(paramFk) {
    this.service.getAllByFk(paramFk).subscribe(data => this.paramList = data);
    this.dash.newParamList$.subscribe((data) => (this.paramList = data));
  }

  onDelete(parId) {
    console.log(parId);
    this.service.deleteParameter(parId).subscribe( () => this.ngOnInit());
  }
}
