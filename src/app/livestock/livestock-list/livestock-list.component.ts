import { SharedDataService } from './../../services/shared-data.service';
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { LivestockService } from "src/app/services/livestock.service";
import { Livestock } from '../livestock.model';

@Component({
  selector: "app-livestock-list",
  templateUrl: "./livestock-list.component.html",
  styleUrls: ["./livestock-list.component.scss"]
})
export class LivestockListComponent implements OnInit {
  title = "Livestock list";
  livestocks: Observable<Livestock[]>;
  livestock: Livestock;
  message: string;

  constructor(
    private service: LivestockService,
    private route: ActivatedRoute,
    private shared: SharedDataService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let fkAquariumId = params.get("fkAquariumId");
      this.service.loadAllLivestock(fkAquariumId);
      this.displayLivestockList(fkAquariumId);
    });
  }

  getAllLivestock() {
    this.livestocks = this.service.getAllLivestock();
  }

  displayLivestockList(fkAquariumId) {
    this.livestocks = this.service.getLivestockByFkId(fkAquariumId);
  }

  onEdit(livestock) {
    this.shared.editObject.next(livestock);
  }

  onDelete(livestockId) {
    this.service.deleteLivestock(livestockId).subscribe(
      data => {
        this.ngOnInit();
      },
      error => console.log("on delete error")
    );
  }
}
