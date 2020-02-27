import { SharedDataService } from "./shared-data.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SessionStorageService {
  constructor(private shared: SharedDataService) {}

  setItem(saved) {
    this.shared.details.subscribe(data => {
      saved = data;
      sessionStorage.setItem("object", JSON.stringify(saved));
    });
  }

  getItem(): any {
    return JSON.parse(sessionStorage.getItem("object"));
  }
}
