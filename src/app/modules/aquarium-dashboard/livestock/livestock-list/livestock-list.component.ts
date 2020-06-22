import { DashboardService } from './../../dashboard.service';
import { SharedDataService } from '../../../../core/services/shared-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
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
  livestock: Livestock;
  deleteMessage: boolean;
  livestockList: any = [];
  livestocks: Observable<Livestock[]>;
  isFk: boolean;

  constructor(
    private service: LivestockService,
    private route: ActivatedRoute,
    private router: Router,
    private shared: SharedDataService,
    private dash: DashboardService  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const fkAquariumId = params.get('fkAquariumId');
      this.displayLivestockList(fkAquariumId);
    });
  }

  displayLivestockList(fkAquariumId) {
    // this.service.getLivestockByFkId(fkAquariumId).subscribe(res => {
    //   this.livestockList = res;
    // });
    this.dash.newLsList$.subscribe((res: Livestock[]) => {
      this.livestockList = res;
    });
  }

  viewAll() {
    this.route.paramMap.subscribe((params) => {
      const lsFk = params.get('fkAquariumId');
      this.router.navigate(['livestock-list', lsFk]);
    });
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
