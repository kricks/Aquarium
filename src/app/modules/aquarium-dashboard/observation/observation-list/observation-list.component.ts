import { Observable } from 'rxjs';
import { HttpObservationService } from './../../../../core/services/http-observation.service';
import { Component, OnInit } from '@angular/core';
import { Observation } from '../observation.model';

@Component({
  selector: 'app-observation-list',
  templateUrl: './observation-list.component.html',
  styleUrls: ['./observation-list.component.scss']
})
export class ObservationListComponent implements OnInit {

  observations: Observable<Observation[]>;
  constructor(private service: HttpObservationService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAllObservation().subscribe(data => {
      console.log(data);
      this.observations = data;
    });
  }

}
