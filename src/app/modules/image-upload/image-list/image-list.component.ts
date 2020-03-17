import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Image } from '../image.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { FirebaseDatabase } from '@angular/fire';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageHttpService } from 'src/app/core/services/image-http.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  image: Image = new Image();
  images: any = [];
  url: any = [];
  list: AngularFireList<any>;
  row: any = [];
  listRef: AngularFirestoreCollection<any>;
  listRef$: Observable<any[]>;

  constructor(
    private afs: AngularFirestore,
    private service: ImageHttpService
  ) {}

  ngOnInit() {
    // this.listAll();
    this.getList();
  }

  getList() {
    this.listRef = this.afs.collection('images');
    this.listRef$ = this.listRef.valueChanges();
  }

  listAll() {
    const ref = firebase.storage().ref('/Aquarium');
    ref.listAll().then(data => {
      this.images = data.items.map( imageRef => {
        this.display(imageRef);
        // this.row = Array.isArray(Array(Math.ceil(this.images.length / 3)).keys());
        // console.log(imageRef);
        // this.display(imageRef);
      });
    });

    // this.images = data.items.map( thing => {
    //   const boo = this.storage.ref(thing.fullPath);
    //   this.test = boo.getDownloadURL().subscribe( (goat: {}) => {
    //     this.url = goat;
    //   });
    // });
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

  // seahorse() {
  //   const boo = this.storage.ref('Aquarium/asd');
  //   this.stuff = boo.getDownloadURL();
  // }
}
