import { Observable } from 'rxjs';
import { Aquarium } from './aquarium.model';
import { AquariumService } from './aquarium.service';
import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { assertNotNull, AssertNotNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-aquarium',
  template: '<h2>{{ title }}</h2>',
  templateUrl: './aquarium.component.html',
  styleUrls: ['./aquarium.component.scss']
})
export class AquariumComponent implements OnInit{
  title = 'aquarium list';
  aquariums: Observable<Aquarium[]>;

  constructor(private service: AquariumService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.aquariums = this.service.getAllAquariums();

    // this.service.getAllAquariums().subscribe((res: any) => {
    //   this.aquariums = res;
    //   console.log(this.aquariums);
    //   }, err => {
    //     console.log(err);
    //   });
  }

}
