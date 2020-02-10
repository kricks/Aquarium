import { SharedDataService } from 'src/app/services/shared-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { LivestockService } from 'src/app/services/livestock.service';

@Component({
  selector: 'app-livestock-list',
  templateUrl: './livestock-list.component.html',
  styleUrls: ['./livestock-list.component.scss']
})
export class LivestockListComponent implements OnInit {
  title="Livestock list";
  livestocks: Observable<Livestock[]>;
  livestock: Livestock;
  fkAquariumId: number;
  constructor(private service: LivestockService, private sharedService: SharedDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
   this.displayLivestockList(this.fkAquariumId);
  } 

  getAllLivestock() {
    this.livestocks = this.service.getAllLivestock()
  }

  displayLivestockList(fkAquariumId) { 
   this.livestocks = this.service.getLivestockByFkId(295);
  }

}
