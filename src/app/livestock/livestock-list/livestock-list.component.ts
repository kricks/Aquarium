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

  constructor(
    private service: LivestockService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let fkAquariumId = params.get("fkAquariumId");
      this.displayLivestockList(fkAquariumId);
      console.log("value " + fkAquariumId);
    });
  }

  getAllLivestock() {
    this.livestocks = this.service.getAllLivestock();
  }

  displayLivestockList(fkAquariumId) {
    this.livestocks = this.service.getLivestockByFkId(fkAquariumId);
  }

  onEdit() {}

  onDelete() {}
}
