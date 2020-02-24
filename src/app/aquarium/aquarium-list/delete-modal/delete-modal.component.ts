import { AquariumService } from 'src/app/services/aquarium.service';
import { Component, OnInit, Input } from "@angular/core";
import { Aquarium } from "../../aquarium.model";

@Component({
  selector: "app-delete-modal",
  templateUrl: "./delete-modal.component.html",
  styleUrls: ["./delete-modal.component.scss"]
})
export class DeleteModalComponent implements OnInit {
  @Input() deleteModal: boolean;
  @Input() aquarium: Aquarium;

  constructor(private service: AquariumService) {}

  ngOnInit() {
  }

  onDelete(aquariumId) {
    this.service.deleteAquarium(aquariumId).subscribe(
      data => {
        this.service.loadAllAquariums();
      },
      error => console.log("on delete error")
    );
    console.log("delete model");
  }
}
