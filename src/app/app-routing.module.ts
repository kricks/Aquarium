import { AquariumListComponent } from './aquarium/aquarium-list/aquarium-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AquariumComponent } from './aquarium/aquarium.component';
import { LivestockListComponent } from './livestock/livestock-list/livestock-list.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'aquarium-list', component: AquariumListComponent},
  { path: 'aquarium', component: AquariumComponent, children: [
    // {path: 'new', component:},
    // {path: 'id', component:},
    // {path: 'id/edit', component:},
  ]},
  { path: 'livestock', component: LivestockListComponent},
  { path: 'livestock/:aquariumId', component: LivestockListComponent, children: [
     // {path: ':aquariumId', component: LivestockListComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
