import { AquariumDashboardModule } from './../aquarium-dashboard/aquarium-dashboard.module';
import { LivestockAqDetailsComponent } from './../aquarium-dashboard/livestock/livestock-aq-details/livestock-aq-details.component';
import { AquariumRoutingModule } from './aquarium-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AquariumComponent } from './aquarium.component';
import { AquariumListComponent } from './aquarium-list/aquarium-list.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AquariumFormComponent } from './aquarium-form/aquarium-form.component';
import { DeleteModalComponent } from './aquarium-list/delete-modal/delete-modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AquariumComponent,
    AquariumListComponent,
    ConfirmationComponent,
    AquariumFormComponent,
    DeleteModalComponent
  ],
  imports: [RouterModule, CommonModule, ReactiveFormsModule, AquariumRoutingModule, AquariumDashboardModule],
  providers: [],
})
export class AquariumModule {}
