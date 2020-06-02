import { LivestockListComponent } from './livestock/livestock-list/livestock-list.component';
import { ChartComponent } from './parameter/chart/chart.component';
import { ParameterListComponent } from './parameter/parameter-list/parameter-list.component';
import { LogListComponent } from './log/log-list/log-list.component';
import { ParameterFormComponent } from './parameter/parameter-form/parameter-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AquariumDashboardComponent } from './aquarium-dasboard.component';

const routes: Routes = [
  {
    path: '',
    component: AquariumDashboardComponent,
    children: []
  },
  { path: 'log-list/:fkAquariumId', component: LogListComponent},
  { path: 'livestock-list', component: LivestockListComponent},
  { path: 'parameters-list', component: ParameterListComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
