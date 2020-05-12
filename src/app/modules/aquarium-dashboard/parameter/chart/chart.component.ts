import { HttpParameterService } from './../../../../core/services/http-parameter.service';
import { Component, OnInit } from '@angular/core';
import { multi } from './data';
import { Observable } from 'rxjs';
import { Parameter } from '../parameter.model';
import { map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  multi: any[];
  wrapper: any[];
  test: any = [];
  parameters: Observable<Parameter[]>;
  parameter: Parameter = new Parameter();

  // options
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'date';
  yAxisLabel = 'ppm';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  constructor(private service: HttpParameterService) {
    Object.assign(this, { multi });
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((data) => {

      this.parameters = data.map((datum) => ({
          name: datum.date,
          value: datum.ph,
      }));
      this.wrapper = [{
        name: 'name',
        series: this.parameters
      }];
      console.log(this.wrapper);
      console.log(JSON.stringify(this.wrapper));
    });
    return this.wrapper;
  }

  // getAll() {
      // this.test = data.map( params => ({
      //   ph: params.ph,
      //   nitrate: params.nitrate,
      //   nitrite: params.nitrite,
      //   ammonia: params.ammonia,
      //   phosphate: params.phosphate,
      //   magnesium: params.magnesium,
      //   calcium: params.calcium,
      //   potasium: params.potasium,
      //   iodine: params.iodine,
      //   alkalinity: params.alkalinity,
      // }));

  //   this.service.getAll().subscribe((data) => {
  //     this.parameters = data;
  //     console.log(this.parameters);
  //     data.forEach((item, index) => {
  //       console.log(item);
  //       console.log(index);
  //     //   item.forEach((ele) => {
  //     //   console.log(ele);
  //     // });
  //       // let obj;
  //       // let nested;
  //       // obj = {
  //       //   name: item.parameterId,
  //       //   series: nested = {
  //       //     name: item.date,
  //       //     value: item.ph
  //       //   }
  //       // };
  //       // this.temp = nested;
  //       // this.test = obj;
  //       // console.log(this.test);
  //     });
  //   });
  // }

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
