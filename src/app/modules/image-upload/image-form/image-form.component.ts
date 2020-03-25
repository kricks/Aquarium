import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/modules/image-upload/image.model';
import {
  AngularFireStorage,
  AngularFireUploadTask,
  AngularFireStorageReference
} from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ImageHttpService } from 'src/app/core/services/image-http.service';
@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent implements OnInit {
  form: FormGroup;
  selectedFile;
  image: Image = new Image();
  options = ['Aquarium', 'Livestock', 'General'];
  uploadProgress: Observable<any>;
  task: AngularFireUploadTask;
  progress;
  message: boolean;
  ref: AngularFireStorageReference;
  imgSrc: string;

  constructor(
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private service: ImageHttpService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      imageURL: [null, [Validators.required]],
      name: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });
    this.image = this.form.value;
    this.imgSrc = '../../../../assets/images/placeholder.png';
    this.message = false;
    this.progress = false;
    this.selectedFile = null;
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
    const fileRef = this.storage.ref(filePath);
    this.task = this.storage.upload(filePath, this.selectedFile);
    this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(data => {
            form.imageURL = data;
            this.service.pushImage(form);
          });
        })
      )
      .subscribe();
    this.progressBar();
  }

  onSubmit(form) {
    this.upload(form);
  }

  progressBar() {
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().subscribe(data => {
      this.progress = (data.bytesTransferred / data.totalBytes) * 100;
    });
  }

  getDownload() {
    this.ref.getDownloadURL().subscribe(data => {
      console.log(data);
    });
  }

  reset() {
    this.createForm();
  }
}
