import { ShortenPipe } from './../../shared/shorten.pipe';
import { ChartComponent } from './parameter/chart/chart.component';
import { LogFormComponent } from './log/log-form/log-form.component';
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
import { LogListComponent } from './log/log-list/log-list.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AquariumDashboardComponent,
    LivestockListComponent,
    LivestockFormComponent,
    LivestockAqDetailsComponent,
    ParameterFormComponent,
    ParameterListComponent,
    LogListComponent,
    LogFormComponent,
    ChartComponent,
    ShortenPipe
  ],
  imports: [
    NgxChartsModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardRoutingModule
  ],
  providers: [],
  exports: [LivestockAqDetailsComponent],
})
export class AquariumDashboardModule {}
