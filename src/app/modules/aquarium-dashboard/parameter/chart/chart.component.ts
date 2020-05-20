import { HttpParameterService } from './../../../../core/services/http-parameter.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Parameter } from '../parameter.model';
import * as shape from 'd3-shape';


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
    '#4FC3F7', '#2A80B9', '#C4BBF0', '#9B58B5', '#ECF0F1' ],
    // domain: ['#1BBC9B', '#2A80B9', '#E77E23', '#9B58B5', '#4FC3F7',
    // '#F1C40F', '#C1392B', '#ECF0F1', '#C4BBF0', '#B51A62' ],
  };

  constructor(private service: HttpParameterService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((data) => {
      this.wrapper = [
        {
          name: 'ph',
          series: data.map((d) => ({
            name: d.date,
            value: d.ph,
          })),
        },
        {
          name: 'nitrate',
          series: data.map((d) => ({
            name: d.date,
            value: d.nitrate,
          })),
        },
        {
          name: 'nitrite',
          series: data.map((d) => ({
            name: d.date,
            value: d.nitrite,
          })),
        },
        {
          name: 'ammonia',
          series: data.map((d) => ({
            name: d.date,
            value: d.ammonia,
          })),
        },
        {
          name: 'phosphate',
          series: data.map((d) => ({
            name: d.date,
            value: d.phosphate,
          })),
        },
        {
          name: 'magnesium',
          series: data.map((d) => ({
            name: d.date,
            value: d.magnesium,
          })),
        },
        {
          name: 'calcium',
          series: data.map((d) => ({
            name: d.date,
            value: d.calcium,
          })),
        },
        {
          name: 'ammonia',
          series: data.map((d) => ({
            name: d.date,
            value: d.ammonia,
          })),
        },
        {
          name: 'potasium',
          series: data.map((d) => ({
            name: d.date,
            value: d.potasium,
          })),
        },
        {
          name: 'iodine',
          series: data.map((d) => ({
            name: d.date,
            value: d.iodine,
          }))
        },
        {
          name: 'alkalinity',
          series: data.map((d) => ({
            name: d.date,
            value: d.alkalinity,
          }))
        },
      ];
      console.log(this.wrapper);
    });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
