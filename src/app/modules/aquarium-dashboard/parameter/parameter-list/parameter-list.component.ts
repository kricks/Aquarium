import { Observable } from 'rxjs';
import { HttpParameterService } from './../../../../core/services/http-parameter.service';
import { Component, OnInit } from '@angular/core';
import { Parameter } from '../parameter.model';

@Component({
  selector: 'app-parameter-list',
  templateUrl: './parameter-list.component.html',
  styleUrls: ['./parameter-list.component.scss']
})
export class ParameterListComponent implements OnInit {
  parameters: Observable<Parameter[]>;

  constructor(private service: HttpParameterService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe( data => {
      this.parameters = data;
      console.log(this.parameters);
    });
  }

}
