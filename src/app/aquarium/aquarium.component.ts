import { Component, OnInit, ɵCodegenComponentFactoryResolver, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-aquarium',
  templateUrl: './aquarium.component.html',
  styleUrls: ['./aquarium.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AquariumComponent implements OnInit{
  title = 'Add New Aquarium';

  constructor() {}

  ngOnInit() {

  }

}
