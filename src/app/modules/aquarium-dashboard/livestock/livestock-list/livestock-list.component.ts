import { SessionStorageService } from './../../../../core/services/session-storage.service';
import { SharedDataService } from '../../../../core/services/shared-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LivestockService } from 'src/app/core/services/http-livestock.service';
import { Livestock } from '../livestock.model';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-livestock-list',
  templateUrl: './livestock-list.component.html',
  styleUrls: ['./livestock-list.component.scss']
})
export class LivestockListComponent implements OnInit {
  title = 'Livestock list';
  livestocks: Observable<Livestock[]>;
  deleteMessage: boolean;

  constructor(
    private service: LivestockService,
    private route: ActivatedRoute,
    private shared: SharedDataService,
    private logger: NGXLogger,
    private session: SessionStorageService
  ) {}

  ngOnInit() {
    // this.shared.details$.subscribe( data => {
    //   let thing = data;
    //   thing = this.session.getItem();
    //   console.log("thing" + thing.aquariumId);
    //   this.service.loadAllLivestock(thing.aquariumId);
    //   this.displayLivestockList(thing.aquariumId);
    // });

    this.route.paramMap.subscribe(params => {
      const fkAquariumId = params.get('fkAquariumId');
      this.service.loadAllLivestock(fkAquariumId);
      this.displayLivestockList(fkAquariumId);
      console.log(name);
    });
  }

  getAllLivestock() {
    this.livestocks = this.service.getAllLivestock();
  }

  displayLivestockList(fkAquariumId) {
    this.livestocks = this.service.getLivestockByFkId(fkAquariumId);
  }

  onEdit(livestock) {
    this.shared.editItem(livestock);
  }

  showMessage() {
    this.deleteMessage = false;
  }

  onDelete(livestockId) {
    this.shared.isDeleting((this.shared.isDelete = true));
    this.service.deleteLivestock(livestockId).subscribe(
      () => {
        this.ngOnInit();
        this.deleteMessage = true;
      },
      error => this.logger.error(error)
    );
  }
}
