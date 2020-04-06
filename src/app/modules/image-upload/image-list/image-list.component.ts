import { SharedDataService } from './../../../core/services/shared-data.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Image } from '../image.model';
import { ImageService } from 'src/app/core/services/image.service';
import { ThrowStmt } from '@angular/compiler';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})
export class ImageListComponent implements OnInit {
  image: Image = new Image();
  url: any = [];
  images: Observable<Image[]>;
  filteredList: any = [];

  constructor(
    private service: ImageService,
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
    // this.filter();
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

  display(imageRef) {
    imageRef.getDownloadURL().then(
      (url) => {
        this.url = url;
        console.log(url);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteImage(image) {
    console.log(image);
    this.service.deleteImage(image).subscribe(() => {
      this.ngOnInit();
    });
  }
}
