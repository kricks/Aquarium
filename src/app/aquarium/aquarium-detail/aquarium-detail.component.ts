import { OnDestroy } from '@angular/core';
import { SharedDataService } from './../../services/shared-data.service';
import { AquariumService } from 'src/app/services/aquarium.service';
import { AquariumListComponent } from './../aquarium-list/aquarium-list.component';
import { Aquarium } from './../aquarium.model';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-aquarium-detail',
  templateUrl: './aquarium-detail.component.html',
  styleUrls: ['./aquarium-detail.component.scss']
})
export class AquariumDetailComponent implements OnInit, OnDestroy {
  aquarium: Aquarium;
  sub: Subscription;
  
  constructor(private service: AquariumService, private shared: SharedDataService) { }

  ngOnInit() {
    // this.aquarium = this.shared.confirmation;
    this.sub = this.shared.details.subscribe(data => {
      this.aquarium = data;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
