import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ImageHttpService } from 'src/app/core/services/image-http.service';
import { Image } from 'src/app/modules/image-upload/image.model';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent implements OnInit {
  form: FormGroup;
  imgSrc = '../../../../assets/images/placeholder.png';
  selectedFile = null;
  image: Image = new Image();

  constructor(private fb: FormBuilder, private service: ImageHttpService, private storage: AngularFireStorage) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      image: null,
      name: '',
      category: ''
    });
    this.image = this.form.value;
  }

  showPreview(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () =>
      this.imgSrc = reader.result as string;
      reader.readAsDataURL(file);
      this.selectedFile = file;
    }
  }

  onSubmit(form) {
    console.log(form);
    console.log(this.image);
    const filePath = `${form.category}/${form.name}`;
    console.log(this.form.value);
    this.storage.upload(filePath, this.selectedFile);
  }

}

  // public onFileSelected(event) {
  //   this.selectedFile = event.target.files[0];
  //   console.log(this.selectedFile);
  //   console.log(event);
  // }

  // onUpload() {
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);

  //   this.service.upload(fd).subscribe(data => {
  //     if (data.status === 200) {
  //       this.message = 'Image uploaded successfully';
  //     } else {
  //       this.message = 'Image not uploaded successfully';
  //     }
  //   });
  // }

  // readImage(image: Blob) {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(image);
  //   reader.onloadend = () => {
  //     this.base64Data = reader.result;
  //     console.log(this.base64Data);
  //     this.showImage = this.sanitizer.bypassSecurityTrustResourceUrl(
  //       'data:image/jpeg;base64,' + this.base64Data
  //     );
  //   };

    // reader.addEventListener("load", () => {
    //   this.imageUrl = reader.result;
    //   this.showImage = this.sanitizer.bypassSecurityTrustUrl(this.imageUrl);
    //   console.log(this.showImage);
    // }, false);

    // if(image) {
    //   reader.readAsText(image);
    // }

  // Gets called when the user clicks on retieve image button to get the image from back end
  // getImage() {
  //   this.service.getImage(this.imageName).subscribe(
  //     data => {
  //       this.response = data;
  //       this.base64Data = this.response.image;
  //       this.showImage = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + this.base64Data);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
