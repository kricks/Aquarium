import { AquariumDashboardComponent } from './aquarium-dasboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LivestockListComponent } from './livestock/livestock-list/livestock-list.component';
import { LivestockFormComponent } from './livestock/livestock-form/livestock-form.component';
import { LivestockAqDetailsComponent } from './livestock/livestock-aq-details/livestock-aq-details.component';
import { ParameterFormComponent } from './parameter/parameter-form/parameter-form.component';
import { ParameterListComponent } from './parameter/parameter-list/parameter-list.component';
import { ObservationListComponent } from './observation/observation-list/observation-list.component';
import { ObservationFormComponent } from './observation/observation-form/observation-form.component';

@NgModule({
    declarations: [
        AquariumDashboardComponent,
        LivestockListComponent,
        LivestockFormComponent,
        LivestockAqDetailsComponent,
        ParameterFormComponent,
        ParameterListComponent,
        ObservationListComponent,
        ObservationFormComponent
    ],
    imports: [RouterModule, CommonModule, ReactiveFormsModule, FormsModule, DashboardRoutingModule],
    providers: [],
    exports: [LivestockAqDetailsComponent, LivestockFormComponent, LivestockListComponent, ObservationListComponent]
})
export class AquariumDashboardModule {}
