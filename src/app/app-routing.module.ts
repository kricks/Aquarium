import { AquariumFormComponent } from './modules/aquarium/aquarium-form/aquarium-form.component';
import { AquariumDetailComponent } from "./modules/aquarium/aquarium-detail/aquarium-detail.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule, ExtraOptions } from "@angular/router";
import { AquariumComponent } from "./modules/aquarium/aquarium.component";

import { LivestockComponent } from "./modules/livestock/livestock.component";
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  // { path: "livestock", redirectTo: "aquarium", pathMatch: "full"},
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
