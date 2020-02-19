import { OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { SharedDataService } from "./../../services/shared-data.service";
import { Component, OnInit } from "@angular/core";
import { Aquarium } from "src/app/aquarium/aquarium.model";

@Component({
  selector: "app-livestock-aq-details",
  templateUrl: "./livestock-aq-details.component.html",
  styleUrls: ["./livestock-aq-details.component.scss"]
})
export class LivestockAqDetailsComponent implements OnInit, OnDestroy {
  subs: Subscription;
  aquarium: Aquarium;
  constructor(private shared: SharedDataService) {}

  ngOnInit() {
    this.aquarium =  this.shared.confirmation;
    console.log(this.aquarium);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
