import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { AquariumComponent } from './modules/aquarium/aquarium.component';
import { AquariumListComponent } from './modules/aquarium/aquarium-list/aquarium-list.component';
import { AquariumDetailComponent } from './modules/aquarium/aquarium-detail/aquarium-detail.component';
import { AquariumFormComponent } from './modules/aquarium/aquarium-form/aquarium-form.component';
import { LivestockComponent } from './modules/livestock/livestock.component';
import { LivestockListComponent } from './modules/livestock/livestock-list/livestock-list.component';
import { LivestockFormComponent } from './modules/livestock/livestock-form/livestock-form.component';
import { LivestockAqDetailsComponent } from './modules/livestock/livestock-aq-details/livestock-aq-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AquariumService } from './core/services/aquarium.service';
import { LivestockService } from './core/services/livestock.service';
import { SharedDataService } from './core/services/shared-data.service';
import { BrowserModule } from "@angular/platform-browser";
import { DatePipe } from '@angular/common';
import { DeleteModalComponent } from './modules/aquarium/aquarium-list/delete-modal/delete-modal.component';
import { HomeComponent } from './modules/home/home.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AquariumComponent,
    AquariumListComponent,
    AquariumDetailComponent,
    AquariumFormComponent,
    LivestockComponent,
    LivestockListComponent,
    LivestockFormComponent,
    LivestockAqDetailsComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoggerModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.INFO, serverLogLevel: NgxLoggerLevel.ERROR})
  ],
  providers: [
    AquariumService,
    LivestockService,
    SharedDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
