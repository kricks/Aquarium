import { SessionStorageService } from "src/app/core/services/session-storage.service";
import { OnDestroy } from "@angular/core";
import { SharedDataService } from "../../../core/services/shared-data.service";
import { Aquarium } from "../aquarium.model";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { NGXLogger } from "ngx-logger";

@Component({
  selector: "app-aquarium-detail",
  templateUrl: "./aquarium-detail.component.html",
  styleUrls: ["./aquarium-detail.component.scss"]
})
export class AquariumDetailComponent implements OnInit, OnDestroy {
  aquarium: Aquarium;
  sub: Subscription;

  constructor(
    private shared: SharedDataService,
    private session: SessionStorageService
  ) {}

  ngOnInit() {
    this.confirmationDetails();
  }

  confirmationDetails() {
    this.sub = this.shared.details.subscribe(data => {
      this.aquarium = this.session.getItem();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
