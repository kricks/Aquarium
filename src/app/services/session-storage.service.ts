import { SharedDataService } from "./shared-data.service";
import { Injectable } from "@angular/core";
import { Session } from "protractor";

@Injectable({
  providedIn: "root"
})
export class SessionStorageService {
  constructor(
    private shared: SharedDataService
  ) {}

  setStuff(saved) {
    this.shared.details.subscribe(data => {
      saved = data;
      sessionStorage.setItem('object', JSON.stringify(saved));
    });
  }

  getStuff(stuff): string {
     return sessionStorage.getItem('object');
    // this.shared.details.subscribe(data => {
    //   stuff = data;
    //   sessionStorage.getItem(stuff);
    // });
  }
}
