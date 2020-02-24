import { filter } from "rxjs/operators";
import { AquariumFormComponent } from "./../aquarium-form/aquarium-form.component";
import { SharedDataService } from "./../../services/shared-data.service";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";
import { Component, OnInit, OnDestroy, OnChanges } from "@angular/core";
import { Aquarium } from "../aquarium.model";
import { Observable, Subscription } from "rxjs";
import { AquariumService } from "src/app/services/aquarium.service";
import { SessionStorageService } from "src/app/services/session-storage.service";

@Component({
  selector: "app-aquarium-list",
  templateUrl: "./aquarium-list.component.html",
  styleUrls: ["./aquarium-list.component.scss"]
})
export class AquariumListComponent implements OnInit {
  title = "List of Aquariums";
  aquariums: Observable<Aquarium[]>;
  aquarium: Aquarium = new Aquarium();
  subs: Subscription;
  showModal = false;
  showAq;

  constructor(
    private service: AquariumService,
    private router: Router,
    private shared: SharedDataService,
    private session: SessionStorageService
  ) {}

  ngOnInit() {
    this.service.loadAllAquariums();
    this.displayAquariumList();
  }

  displayAquariumList() {
    this.aquariums = this.service.getAllAquariums();
  }

  onEdit(aquarium) {
    this.shared.editObject.next(aquarium);
    this.ngOnInit();
  }

  onDelete(aquarium) {
    this.showModal =!this.showModal;
    this.showAq = aquarium;
    let id = aquarium.aquariumId;
    console.log(this.showModal);
    console.log(id);
    console.log(aquarium);
    console.log(this.showAq);
    // this.subs = this.service.deleteAquarium(aquariumId).subscribe(
    //   data => {
    //     this.ngOnInit();
    //   },
    //   error => console.log("on delete error")
    // );
  }

  onView(aquarium) {
    this.shared.details.next(aquarium);
    let id = aquarium.aquariumId;
    this.session.setStuff(aquarium);
    this.router.navigate(["livestock", id]);
  }
}
