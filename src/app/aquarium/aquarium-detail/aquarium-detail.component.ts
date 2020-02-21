import { browser } from "protractor";
import { OnDestroy, HostListener } from "@angular/core";
import { SharedDataService } from "./../../services/shared-data.service";
import { AquariumService } from "src/app/services/aquarium.service";
import { AquariumListComponent } from "./../aquarium-list/aquarium-list.component";
import { Aquarium } from "./../aquarium.model";
import { Component, OnInit, Input } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";

@Component({
  selector: "app-aquarium-detail",
  templateUrl: "./aquarium-detail.component.html",
  styleUrls: ["./aquarium-detail.component.scss"]
})
export class AquariumDetailComponent implements OnInit, OnDestroy {
  aquarium: Aquarium;
  sub: Subscription;
  refresh = false;

  constructor(private shared: SharedDataService, private router: Router) {}

  ngOnInit() {
    // this.aquarium = this.shared.confirmation;
    this.stuff();
    // this.redirectOnRefresh();
  }

  stuff() {
    this.sub = this.shared.details.subscribe(data => {
      this.aquarium = data;
      console.log(this.aquarium);
    });
  }

  // @HostListener("window:beforeunload") redirectOnRefresh() {
  //   this.router.navigate([""]);
  // }

  // redirectOnRefresh() {
  //   this.sub = this.router.events.subscribe(event => {
  //     if (event instanceof NavigationStart) {
  //       this.refresh = !this.router.navigated;
  //       this.router.navigate([""]);
  //     }
  //   });
  // }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
