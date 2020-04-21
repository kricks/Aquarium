import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AquariumComponent } from './aquarium.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  { path: 'aquarium-list', component: AquariumComponent },
  { path: 'confirmation', component: ConfirmationComponent },
];

@NgModule({})
export class AquariumRoutingModule {}
