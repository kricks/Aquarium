import { Injectable } from "@angular/core";
import { Aquarium } from "../aquarium.model";
import { stripSummaryForJitFileSuffix } from "@angular/compiler/src/aot/util";

@Injectable({
  providedIn: "root"
})
export class AquariumListService {
  aq: Aquarium[] = [];
  getAquariums() {
    // const stuff = [
    //   new Aquarium(1, "a", "salt water", 100, "livign room", "02/05/2020"),
    //   new Aquarium(2, "b", "fresh water", 100, "study", "02/05/2020"),
    //   new Aquarium(3, "c", "brackish water", 100, "kitchen", "02/05/2020")
    // ];

    return ["a", "b", "c"];
  }

  constructor() {}


}
