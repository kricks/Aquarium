import { AquariumService } from 'src/app/core/services/aquarium.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Image } from '../image.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  images: Observable<Image>[];
  base64Data;

  constructor(private service: AquariumService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.service.getAllImages().subscribe(data => {
      this.base64Data = data;
      // this.images = 'data:image/jpeg;base64,' + this.base64Data;
    })
  }

}
