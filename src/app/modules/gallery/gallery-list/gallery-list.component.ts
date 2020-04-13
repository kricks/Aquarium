import { SharedDataService } from '../../../core/services/shared-data.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Image } from '../image.model';
import { GalleryService } from 'src/app/core/services/gallery.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss'],
})
export class GalleryListComponent implements OnInit {
  image: Image = new Image();
  images: Observable<Image[]>;

  constructor(
    private service: GalleryService,
    private shared: SharedDataService
  ) {}

  ngOnInit() {
    this.getImages();
    this.getByCategory();
  }

  getImages() {
    this.service.getAllImages().subscribe((images) => {
      this.images = images;
      console.log(this.images);
    });
  }

  getByCategory() {
    this.shared.getCategoryList$.subscribe((data) => {
      console.log(data);
      if (data.category === 'All') {
        this.getImages();
      }
      this.service.getAllByCategory(data.category).subscribe((images) => {
        this.images = images;
        console.log(this.image);
      });
    });
  }

  deleteImage(image) {
    console.log(image);
    this.service.deleteImage(image).subscribe(() => {
      this.ngOnInit();
    });
  }
}
