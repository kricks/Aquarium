import { SharedDataService } from "../../../core/services/shared-data.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Aquarium } from "../aquarium.model";
import { Observable, Subscription } from "rxjs";
import { AquariumService } from "src/app/core/services/aquarium.service";
import { SessionStorageService } from "src/app/core/services/session-storage.service";

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
  showModal;
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
  }

  onDelete(aquarium) {
    this.showModal = true;
    this.showAq = aquarium;
  }

  onView(aquarium) {
    this.shared.details.next(aquarium);
    let id = aquarium.aquariumId;
    this.session.setItem(aquarium);
    this.router.navigate(["livestock", id]);
  }
}
