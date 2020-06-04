import { DashboardService } from './../../dashboard.service';
import { HttpParameterService } from './../../../../core/services/http-parameter.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Parameter } from '../parameter.model';
import * as shape from 'd3-shape';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  wrapper: any[];
  parameters: Observable<Parameter[]>;
  parameter: Parameter = new Parameter();

  // options
  legend = true;
  showLabels = true;
  animations = true;
  curve = shape.curveCardinal.tension(.25);
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  yAxisLabel = 'PPM';
  gridLines = true;
  gradient = true;

  colorScheme = {
    domain: ['#B51A62', '#C1392B', '#E77E23', '#F1C40F', '#1BBC9B',
    '#4FC3F7', '#2A80B9', '#C4BBF0', '#9B58B5', '#ECF0F1' ]};

  constructor(private route: ActivatedRoute, private service: HttpParameterService,
              private dash: DashboardService) {}

  ngOnInit() {
    this.getParamFk();
  }

  getParamFk() {
    this.route.paramMap.subscribe((params) => {
      const paramFk = params.get('fkAquariumId');
      this.service.loadAll(paramFk);
      this.getAll(paramFk);
    });
  }

  getAll(paramFk) {
    this.dash.newParamList$.subscribe((data) => {
      this.wrapper = [
        {
          name: 'PH',
          series: data.map((d) => ({
            name: d.date,
            value: d.ph,
          })),
        },
        {
          name: 'Nitrate',
          series: data.map((d) => ({
            name: d.date,
            value: d.nitrate,
          })),
        },
        {
          name: 'Nitrite',
          series: data.map((d) => ({
            name: d.date,
            value: d.nitrite,
          })),
        },
        {
          name: 'Ammonia',
          series: data.map((d) => ({
            name: d.date,
            value: d.ammonia,
          })),
        },
        {
          name: 'Phosphate',
          series: data.map((d) => ({
            name: d.date,
            value: d.phosphate,
          })),
        },
        {
          name: 'Magnesium',
          series: data.map((d) => ({
            name: d.date,
            value: d.magnesium,
          })),
        },
        {
          name: 'Calcium',
          series: data.map((d) => ({
            name: d.date,
            value: d.calcium,
          })),
        },
        {
          name: 'Potasium',
          series: data.map((d) => ({
            name: d.date,
            value: d.potasium,
          })),
        },
        {
          name: 'Iodine',
          series: data.map((d) => ({
            name: d.date,
            value: d.iodine,
          }))
        },
        {
          name: 'Alkalinity',
          series: data.map((d) => ({
            name: d.date,
            value: d.alkalinity,
          }))
        },
      ];
      // console.log(this.wrapper);
    });
  }

  onSelect(data): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
