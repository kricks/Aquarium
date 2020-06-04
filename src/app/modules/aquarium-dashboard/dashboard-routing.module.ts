import { LivestockListComponent } from './livestock/livestock-list/livestock-list.component';
import { ParameterListComponent } from './parameter/parameter-list/parameter-list.component';
import { LogListComponent } from './log/log-list/log-list.component';
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
  { path: 'livestock-list/:fkAquariumId', component: LivestockListComponent},
  { path: 'parameters-list/:fkAquariumId', component: ParameterListComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
