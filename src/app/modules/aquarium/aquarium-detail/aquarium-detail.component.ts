import { logging } from 'protractor';
import { OnDestroy } from "@angular/core";
import { SharedDataService } from "../../../core/services/shared-data.service";
import { Aquarium } from "../aquarium.model";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: "app-aquarium-detail",
  templateUrl: "./aquarium-detail.component.html",
  styleUrls: ["./aquarium-detail.component.scss"]
})
export class AquariumDetailComponent implements OnInit, OnDestroy {
  aquarium: Aquarium;
  sub: Subscription;

  constructor(private shared: SharedDataService, private logger: NGXLogger) {}

  ngOnInit() {
    this.confirmationDetails();
  }

  confirmationDetails() {
    this.sub = this.shared.details.subscribe(data => {
      this.aquarium = data;
      this.logger.info(this.aquarium);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
