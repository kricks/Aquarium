import { LivestockFormComponent } from "./livestock/livestock-form/livestock-form.component";
import { AquariumListComponent } from "./aquarium/aquarium-list/aquarium-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AquariumComponent } from "./aquarium/aquarium.component";
import { LivestockListComponent } from "./livestock/livestock-list/livestock-list.component";
import { LivestockComponent } from "./livestock/livestock.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "aquarium", component: AquariumComponent },
  {
    path: "livestock/:fkAquariumId",
    component: LivestockComponent,
    children: [
      // { path: ":fkAquariumId", component: LivestockListComponent },
      // { path: "ls-form", component: LivestockFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
