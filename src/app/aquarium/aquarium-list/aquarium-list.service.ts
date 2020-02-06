import { Injectable } from "@angular/core";
import { Aquarium } from "../aquarium.model";
import { stripSummaryForJitFileSuffix } from "@angular/compiler/src/aot/util";

@Injectable({
  providedIn: "root"
})
export class AquariumListService {
  aq: Aquarium[] = [];
  getAquariums() {

  }

  constructor() {}


}
