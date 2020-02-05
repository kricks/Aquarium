import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AquariumComponent } from './aquarium/aquarium.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'aquarium', component: AquariumComponent, children: [
    // {path: 'new', component:},
    // {path: 'id', component:},
    // {path: 'id/edit', component:},
  ]},
  // { path: 'livestock', component: LivestockListComponent, children: [
  //   {path: 'new', component:},
  //   {path: 'id', component:},
  //   {path: 'id/edit', component:},
  // ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
