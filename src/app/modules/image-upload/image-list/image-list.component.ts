import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Image } from '../image.model';
import { AngularFireList } from '@angular/fire/database';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  image: Image = new Image();
  url: any = [];
  list: AngularFireList<any>;
  row: any = [];
  images: Image[];

  constructor(
    private service: ImageService,
  ) {}

  ngOnInit() {
    this.service.getAll().subscribe(images => {
      this.images = images;
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
    this.service.deleteImage(image);
  }

}
