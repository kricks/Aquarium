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

  getStuff(): any {
    return JSON.parse(sessionStorage.getItem('object'));
  }
}
