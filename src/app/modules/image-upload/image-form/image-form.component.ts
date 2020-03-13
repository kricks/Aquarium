import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/modules/image-upload/image.model';
import {
  AngularFireStorage,
  AngularFireUploadTask,
  AngularFireStorageReference
} from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent implements OnInit {
  form: FormGroup;
  selectedFile = null;
  image: Image = new Image();
  options = ['Aquarium', 'Livestock', 'General'];
  uploadProgress: Observable<any>;
  task: AngularFireUploadTask;
  progress;
  message: boolean;
  ref: AngularFireStorageReference;
  imgSrc: string;

  constructor(private fb: FormBuilder, private storage: AngularFireStorage) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      image: [null, [Validators.required]],
      name: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });
    this.image = this.form.value;
    this.imgSrc = '../../../../assets/images/placeholder.png';
    this.message = false;
    this.progress = false;
  }

  showPreview(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => (this.imgSrc = reader.result as string);
      reader.readAsDataURL(file);
      this.selectedFile = file;
    }
  }

  upload(form) {
    this.message = true;
    const filePath = `${form.category}/${form.name}`;
    this.ref = this.storage.ref(filePath);
    this.task = this.ref.put(this.selectedFile);
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().subscribe(data => {
      this.progress = (data.bytesTransferred / data.totalBytes) * 100;
    });
  }

  onSubmit(form) {
    this.upload(form);
  }

  reset() {
    this.createForm();
  }
}
