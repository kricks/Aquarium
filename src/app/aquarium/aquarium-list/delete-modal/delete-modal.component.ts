import { Component, OnInit, Input } from '@angular/core';
import { Aquarium } from '../../aquarium.model';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {
  @Input() deleteModal: boolean;
  @Input() aquarium: Aquarium;

  constructor() { }

  ngOnInit() {
    console.log("hit delete modal");
  }

}
