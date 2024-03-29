import { SharedDataService } from './../../../core/services/shared-data.service';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-filter',
  templateUrl: './gallery-filter.component.html',
  styleUrls: ['./gallery-filter.component.scss']
})
export class GalleryFilterComponent implements OnInit {
  options = ['All', 'Aquarium', 'Livestock', 'Other'];
  category = 'All';

  constructor(private shared: SharedDataService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.shared.getCategory(form.value);
  }


}
