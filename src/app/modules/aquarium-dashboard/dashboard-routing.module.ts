import { ParameterListComponent } from './parameter/parameter-list/parameter-list.component';
import { LogListComponent } from './log/log-list/log-list.component';
import { ParameterFormComponent } from './parameter/parameter-form/parameter-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AquariumDashboardComponent } from './aquarium-dasboard.component';
import { LogFormComponent } from './log/log-form/log-form.component';

const routes: Routes = [
  {
    path: '',
    component: AquariumDashboardComponent,
    children: [
      // {path: ':fkAquariumId', component: AquariumDashboardComponent}
    ]
  },
  { path: 'log-list', component: LogListComponent},
  { path: 'parameters-list', component: ParameterListComponent},
  { path: 'parameter-add', component: ParameterFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
