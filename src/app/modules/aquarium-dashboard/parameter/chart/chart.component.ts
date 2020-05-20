import { HttpParameterService } from './../../../../core/services/http-parameter.service';
import { Component, OnInit } from '@angular/core';
import { multi } from './data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Parameter } from '../parameter.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  multi: any[];
  wrapper: any[];
  test: any = [];
  thing: any = [];
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
      // this.parameters = data.map((datum) => [
      //   {
      //     ph: datum.ph,
      //     nitrate: datum.nitrate,
      //     nitrite: datum.nitrite,
      //     ammonia: datum.ammonia,
      //     phosphate: datum.phosphate,
      //     magnesium: datum.magnesium,
      //     calcium: datum.calcium,
      //     potasium: datum.potasium,
      //     iodine: datum.iodine,
      //     alkalinity: datum.alkalinity,
      //     date: datum.date
      //   }
      //   // {
      //   //   name: datum.date,
      //   //   value: datum.ph,
      //   // },
      //   // {
      //   //   name: datum.date,
      //   //   value: datum.nitrate,
      //   // },
      //   // {
      //   //   name: datum.date,
      //   //   value: datum.nitrite,
      //   // },
      //   // {
      //   //   name: datum.date,
      //   //   value: datum.ammonia,
      //   // },
      //   // {
      //   //   name: datum.date,
      //   //   value: datum.phosphate,
      //   // },
      //   // {
      //   //   name: datum.date,
      //   //   value: datum.magnesium,
      //   // },
      //   // {
      //   //   name: datum.date,
      //   //   value: datum.calcium,
      //   // },
      //   // {
      //   //   name: datum.date,
      //   //   value: datum.potasium,
      //   // },
      //   // {
      //   //   name: datum.date,
      //   //   value: datum.iodine,
      //   // },
      //   // {
      //   //   name: datum.date,
      //   //   value: datum.alkalinity,
      //   // },
      // ]);

      this.wrapper = [
        {
          name: 'ph',
          series: data.map( (d) => (
            {
              name: d.date,
              value: d.ph
            }
          ))
        },
        {
          name: 'nitrate',
          series: data.map( (d) => (
            {
              name: d.date,
              value: d.nitrate
            }
          ))
        }
        // {
        //   name: 'ph',
        //   series: [],
        // },
        // {
        //   name: 'nitrate',
        //   series: [],
        // },
        // {
        //   name: 'nitrite',
        //   series: [],
        // },
        // {
        //   name: 'ammonia',
        //   series: [],
        // },
        // {
        //   name: 'phosphate',
        //   series: [],
        // },
        // {
        //   name: 'magnesium',
        //   series: [],
        // },
        // {
        //   name: 'calcium',
        //   series: [],
        // },
        // {
        //   name: 'ammonia',
        //   series: [],
        // },
        // {
        //   name: 'potasium',
        //   series: [],
        // },
        // {
        //   name: 'iodine',
        //   series: [],
        // },
        // {
        //   name: 'alkalinity',
        //   series: [],
        // },
      ];
      console.log(this.parameters);
      console.log(JSON.stringify(this.wrapper));
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
