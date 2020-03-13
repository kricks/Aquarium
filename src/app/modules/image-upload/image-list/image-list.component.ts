import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Image } from '../image.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { FirebaseDatabase } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  images: any = [];
  stuff;
  test: any = [];
  goat: any = [];


  constructor(
    private storage: AngularFireStorage,
    private fb: AngularFireDatabase
  ) {}

  ngOnInit() {
    const ref = firebase.storage().ref('/Aquarium');
    ref.listAll().then( data => {
      this.images = data.items.map( thing => {
        const boo = this.storage.ref(thing.fullPath);
        this.test = boo.getDownloadURL().subscribe( (goat: {}) => {
          console.log(goat);
          this.goat = goat;
        });
        return this.test;
      });
    });
  }

  seahorse() {
    const boo = this.storage.ref('Aquarium/asd');
    this.stuff = boo.getDownloadURL();
  }

}
