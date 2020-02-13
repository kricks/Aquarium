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
export class AquariumDetailComponent implements OnInit {
  aquarium: Aquarium;
  sub: Subscription;
  
  constructor(private service: AquariumService, private shared: SharedDataService) { }

  ngOnInit() {
    // this.shared.currentAq.subscribe(aquarium => this.aquarium = aquarium)
    this.aquarium = this.shared.confirmation;
  }

}
