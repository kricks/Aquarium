import { Router } from '@angular/router';
import { AquariumService } from '../../services/aquarium.service';
import { Aquarium } from './../aquarium.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-aquarium-form',
  templateUrl: './aquarium-form.component.html',
  styleUrls: ['./aquarium-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AquariumFormComponent implements OnInit {
  aquarium: Aquarium = new Aquarium();
  submitted = false;
  type = "";
  private options = ["Fresh Water", "Salt Water", "Brackish Water"];

  constructor(private service: AquariumService, private router: Router) { }

  ngOnInit() {
  }

  saveAquarium() {
    this.service.createAquarium(this.aquarium).subscribe(data => console.log(data),
    error => console.log(error));
    this.aquarium = new Aquarium();
  }

  onAddAquarium() {
    this.submitted = true;
    this.saveAquarium();
    // this.aquariumDetails(this.aquarium);
  }

  onUpdateAquarium() {
    // this.service.updateAquarium(aquariumId, this.aquarium)
    // .subscribe(data => console.log("new aquarium " + data),
    // error => console.log("update error " + error));
  }

  onClearForm() {

  }

  aquariumDetails(aquarium) {
    this.router.navigate(['details', aquarium]);
  }

}
