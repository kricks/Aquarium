import { Router } from '@angular/router';
import { AquariumService } from './../aquarium.service';
import { Aquarium } from './../aquarium.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

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

  }

  onClearForm() {

  }

  aquariumDetails(aquarium) {
    this.router.navigate(['details', aquarium]);
  }

}
