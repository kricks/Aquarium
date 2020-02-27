import { SharedDataService } from "../../../core/services/shared-data.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { LivestockService } from "src/app/core/services/livestock.service";
import { Livestock } from "../livestock.model";
import { NGXLogger } from "ngx-logger";

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
  deleteMessage: boolean;

  constructor(
    private service: LivestockService,
    private route: ActivatedRoute,
    private shared: SharedDataService,
    private logger: NGXLogger
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

  showMessage() {
    this.deleteMessage = false;
  }

  onDelete(livestockId) {
    this.service.deleteLivestock(livestockId).subscribe(
      () => {
        this.ngOnInit();
        this.deleteMessage = true;
      },
      error => this.logger.error(error)
    );
  }
}
