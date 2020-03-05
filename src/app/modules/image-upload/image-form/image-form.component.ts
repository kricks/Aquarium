import { AquariumService } from "src/app/core/services/aquarium.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-image-form",
  templateUrl: "./image-form.component.html",
  styleUrls: ["./image-form.component.scss"]
})
export class ImageFormComponent implements OnInit {
  selectedFile: File;
  receivedImage;
  base64Data;
  convertedImage;
  message: string;
  imageName;
  retrieveResonse;
  retrievedImage;

  constructor(private http: HttpClient, private service: AquariumService) {}

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

  // Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    // this.http.get('http://localhost:8080/image/get/' + this.imageName)
    //   .subscribe(
    //     res => {
    //       this.retrieveResonse = res;
    //       this.base64Data = this.retrieveResonse.picByte;
    //       this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    //     }
    //   );
    this.service.getImage(this.imageName).subscribe(data => {
      console.log(data);
      // this.retrieveResonse = data;
      // console.log(this.retrieveResonse);
      // this.base64Data = this.retrieveResonse.imageByte;
      // this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;

    },
    error => {
      console.log(error);
    })
  }
}
