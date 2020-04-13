import { ConfirmationComponent } from './modules/aquarium/confirmation/confirmation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AquariumComponent } from './modules/aquarium/aquarium.component';

import { AquariumDashboardComponent } from './modules/aquarium-dashboard/aquarium-dasboard.component';
import { HomeComponent } from './modules/home/home.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { ImageFormComponent } from './modules/gallery/image-form/image-form.component';
import { GalleryListComponent } from './modules/gallery/gallery-list/gallery-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aquarium-list', component: AquariumComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'aquarium-dashboard/:fkAquariumId', component: AquariumDashboardComponent },
  {
    path: 'gallery',
    component: GalleryComponent,
    children: [
      { path: 'add', component: ImageFormComponent },
      { path: 'list', component: GalleryListComponent },
    ],
  },
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
