import { Observable } from 'rxjs';
import { Aquarium } from './aquarium.model';
import { AquariumService } from './aquarium.service';
import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-aquarium',
  templateUrl: './aquarium.component.html',
  styleUrls: ['./aquarium.component.scss']
})
export class AquariumComponent implements OnInit{
  title = 'Add New Aquarium';

  constructor() {}

  ngOnInit() {

  }

}
