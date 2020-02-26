import { AquariumService } from "src/app/core/services/aquarium.service";
import { Component, OnInit, Input } from "@angular/core";
import { Aquarium } from "../../aquarium.model";
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: "app-delete-modal",
  templateUrl: "./delete-modal.component.html",
  styleUrls: ["./delete-modal.component.scss"]
})
export class DeleteModalComponent implements OnInit {
  @Input() deleteModal: boolean;
  @Input() aquarium: Aquarium;

  constructor(private service: AquariumService, private logger: NGXLogger) {}

  ngOnInit() {}

  onDelete(aquariumId) {
    this.service.deleteAquarium(aquariumId).subscribe(
      data => {
        this.service.loadAllAquariums();
      },
      error => this.logger.info("on delete error")
    );
    this.logger.info("delete model");
  }
}
