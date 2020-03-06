import { Image } from './../image.model';
import { AquariumService } from "src/app/core/services/aquarium.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-image-form",
  templateUrl: "./image-form.component.html",
  styleUrls: ["./image-form.component.scss"]
})
export class ImageFormComponent implements OnInit {
  selectedFile: File;
  message: string;
  image: Image = new Image();
  imageName;
  imageUrl;
  showImage;
  response;
  retrievedImage;
  base64Data;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private service: AquariumService
  ) {}

  ngOnInit() {}

  public onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    console.log(event);
  }

  onUpload() {
    const fd = new FormData();
    fd.append("image", this.selectedFile, this.selectedFile.name);

    this.service.upload(fd).subscribe(data => {
      if (data.status === 200) {
        this.message = "Image uploaded successfully";
      } else {
        this.message = "Image not uploaded successfully";
      }
    });
  }

  readImage(image: Blob) {
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      this.base64Data = reader.result;
      console.log(this.base64Data);
      this.showImage = this.sanitizer.bypassSecurityTrustResourceUrl(
        "data:image/jpeg;base64," + this.base64Data
      );
    };

    // reader.addEventListener("load", () => {
    //   this.imageUrl = reader.result;
    //   this.showImage = this.sanitizer.bypassSecurityTrustUrl(this.imageUrl);
    //   console.log(this.showImage);
    // }, false);

    // if(image) {
    //   reader.readAsText(image);
    // }
  }

  // Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
    this.service.getImage(this.imageName).subscribe(
      data => {
        this.response = data;
        this.base64Data = this.response.image;
        this.showImage = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + this.base64Data);
        console.log(this.showImage)
      },
      error => {
        console.log(error);
      }
    );
  }
}
