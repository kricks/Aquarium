import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Image } from '../image.model';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  image: Image = new Image();
  url: any = [];
  images: Observable<Image[]>;

  constructor(private service: ImageService) {}

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.service.getAllImages().subscribe(images => {
      this.images = images;
      console.log(this.images);
    });
  }

  display(imageRef) {
    imageRef.getDownloadURL().then(
      url => {
        this.url = url;
        console.log(url);
      },
      error => {
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
