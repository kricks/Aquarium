import { AquariumService } from '../../../../core/services/http-aquarium.service';
import { Aquarium } from '../../../aquarium/aquarium.model';
import { SessionStorageService } from '../../../../core/services/session-storage.service';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../../../../core/services/shared-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livestock-aq-details',
  templateUrl: './livestock-aq-details.component.html',
  styleUrls: ['./livestock-aq-details.component.scss']
})
export class LivestockAqDetailsComponent implements OnInit, OnDestroy {
  subs: Subscription;
  aquarium: Aquarium;
  constructor(
    private shared: SharedDataService,
    private session: SessionStorageService,
    private service: AquariumService
  ) {}

  ngOnInit() {
    this.getSessionData();
  }

  getSessionData() {
    this.subs = this.shared.details$.subscribe(data => {
      this.aquarium = this.session.getItem();
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
