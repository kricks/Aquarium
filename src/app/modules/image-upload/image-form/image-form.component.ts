import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ImageHttpService } from "src/app/core/services/image-http.service";
import { Image } from "src/app/modules/image-upload/image.model";
import {
  AngularFireStorage,
  AngularFireUploadTask,
  AngularFireStorageReference
} from "@angular/fire/storage";
import { Observable } from "rxjs";
import { finalize, map } from "rxjs/operators";

@Component({
  selector: "app-image-form",
  templateUrl: "./image-form.component.html",
  styleUrls: ["./image-form.component.scss"]
})
export class ImageFormComponent implements OnInit {
  form: FormGroup;
  imgSrc = "../../../../assets/images/placeholder.png";
  selectedFile = null;
  image: Image = new Image();
  uploadProgress: Observable<any>;
  downloadURL: Observable<any>;
  task: AngularFireUploadTask;
  message;
  ref: AngularFireStorageReference;

  constructor(private fb: FormBuilder, private storage: AngularFireStorage) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      image: null,
      name: "",
      category: ""
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
    const filePath = `${form.category}/${form.name}`;
    this.ref = this.storage.ref(filePath);
    this.task = this.ref.put(this.selectedFile);
    this.uploadProgress = this.task.percentageChanges();

    this.task
      .snapshotChanges()
      .pipe(finalize(() => (this.downloadURL = this.ref.getDownloadURL())))
      .subscribe( data => {
        this.message = ((data.bytesTransferred / data.totalBytes) * 100);
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
