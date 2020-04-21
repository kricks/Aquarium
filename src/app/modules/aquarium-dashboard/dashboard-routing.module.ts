import { ParameterFormComponent } from './parameter/parameter-form/parameter-form.component';
import { ObservationFormComponent } from './observation/observation-form/observation-form.component';
import { ObservationListComponent } from './observation/observation-list/observation-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AquariumDashboardComponent } from './aquarium-dasboard.component';

const routes: Routes = [
  {
    path: '',
    component: AquariumDashboardComponent,
  },
  { path: 'observation-add', component: ObservationFormComponent},
  { path: 'parameter-add', component: ParameterFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
