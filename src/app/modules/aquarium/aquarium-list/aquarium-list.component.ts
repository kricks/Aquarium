import { SharedDataService } from '../../../core/services/shared-data.service';
import { Router} from '@angular/router';
import {
  Component,
  OnInit
} from '@angular/core';
import { Aquarium } from '../aquarium.model';
import { AquariumService } from 'src/app/core/services/http-aquarium.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-aquarium-list',
  templateUrl: './aquarium-list.component.html',
  styleUrls: ['./aquarium-list.component.scss']
})
export class AquariumListComponent implements OnInit {
  title = 'List of Aquariums';
  aquarium: Aquarium = new Aquarium();
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
  }

  // display() {
  //   this.service.getAllAquariums(data: {}) => {
  //     this.aqariums.
  //   }
  // }

  onEdit(aquarium) {
    this.shared.editItem(aquarium);
  }

  onDelete(aquarium) {
    this.showModal = true;
    this.showAq = aquarium;
    this.shared.isDeleting((this.shared.isDelete = true));
  }

  onView(aquarium) {
    this.shared.sendData(aquarium);
    let id = aquarium.aquariumId;
    this.session.setItem(aquarium);
    this.router.navigate(['aquarium-dashboard', id]);
  }
}
