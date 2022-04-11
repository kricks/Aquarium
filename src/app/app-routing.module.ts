import { ConfirmationComponent } from './modules/aquarium/confirmation/confirmation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AquariumComponent } from './modules/aquarium/aquarium.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aquarium-list', component: AquariumComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  {
    path: 'aquarium-dashboard/:fkAquariumId',
    loadChildren: () =>
      import('./modules/aquarium-dashboard/aquarium-dashboard.module').then(
        (m) => m.AquariumDashboardModule
      ),
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./modules/gallery/gallery.module').then((m) => m.GalleryModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/contact/contact.module').then((m) => m.ContactModule),
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
