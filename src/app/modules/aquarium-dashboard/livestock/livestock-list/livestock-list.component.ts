import { SessionStorageService } from './../../../../core/services/session-storage.service';
import { SharedDataService } from '../../../../core/services/shared-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LivestockService } from 'src/app/core/services/http-livestock.service';
import { Livestock } from '../livestock.model';
import { NGXLogger } from 'ngx-logger';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-livestock-list',
  templateUrl: './livestock-list.component.html',
  styleUrls: ['./livestock-list.component.scss']
})
export class LivestockListComponent implements OnInit {
  title = 'Livestock list';
  livestock: Livestock;
  deleteMessage: boolean;
  livestockList: any = [];
  livestocks: Observable<Livestock[]>;
  isFk: boolean;

  constructor(
    private service: LivestockService,
    private route: ActivatedRoute,
    private shared: SharedDataService,
    private logger: NGXLogger
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const fkAquariumId = params.get('fkAquariumId');
      this.displayLivestockList(fkAquariumId);
      // this.getAllLivestock(fkAquariumId);
      // if (!fkAquariumId) {
      //   this.isFk = false;
      //   this.getAllLivestock();
      // } else {
      //   this.isFk = true;
      //   this.displayLivestockList(fkAquariumId);
      // }
    });
  }

  getAllLivestock(fkAquariumId) {
    this.livestocks = this.service.getLivestockByFkId(fkAquariumId);
  }

  displayLivestockList(fkAquariumId) {
    this.service.loadAllLivestock(fkAquariumId);
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
        console.log('ls delete hit');
        this.deleteMessage = true;
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
