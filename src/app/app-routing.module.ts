import { AquariumDetailComponent } from "./aquarium/aquarium-detail/aquarium-detail.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule, ExtraOptions } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AquariumComponent } from "./aquarium/aquarium.component";

import { LivestockComponent } from "./livestock/livestock.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "aquarium", component: AquariumComponent },
  { path: "confirmation", component: AquariumDetailComponent },
  { path: "livestock/:fkAquariumId", component: LivestockComponent }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
