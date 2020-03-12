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
  imgSrc = '../../../../assets/images/placeholder.png';
  selectedFile = null;
  image: Image = new Image();
  options = ['Aquarium', 'Livestock', 'General'];
  uploadProgress: Observable<any>;
  task: AngularFireUploadTask;
  progress;
  ref: AngularFireStorageReference;


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
    console.log(form.value);
    const filePath = `${form.category}/${form.name}`;
    this.ref = this.storage.ref(filePath);
    this.task = this.ref.put(this.selectedFile);
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().subscribe(data => {
      this.progress = (data.bytesTransferred / data.totalBytes) * 100;
    });

    // this.task = this.storage.upload(filePath, this.selectedFile);
    // this.message = this.task
    //   .snapshotChanges()
    //   .pipe(map(s => (s.bytesTransferred / s.totalBytes) * 100));
    // this.transfer = this.message.bytesTransferred;
    // this.total = this.message.totalBytes;

    this.createForm();
  }

  onSubmit(form) {
    this.upload(form);
  }
}
