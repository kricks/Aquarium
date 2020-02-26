import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { AquariumComponent } from './aquarium/aquarium.component';
import { AquariumListComponent } from './aquarium/aquarium-list/aquarium-list.component';
import { AquariumDetailComponent } from './aquarium/aquarium-detail/aquarium-detail.component';
import { AquariumFormComponent } from './aquarium/aquarium-form/aquarium-form.component';
import { LivestockComponent } from './livestock/livestock.component';
import { LivestockListComponent } from './livestock/livestock-list/livestock-list.component';
import { LivestockFormComponent } from './livestock/livestock-form/livestock-form.component';
import { LivestockAqDetailsComponent } from './livestock/livestock-aq-details/livestock-aq-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AquariumService } from './services/aquarium.service';
import { LivestockService } from './services/livestock.service';
import { SharedDataService } from './services/shared-data.service';
import { BrowserModule } from "@angular/platform-browser";
import { DatePipe } from '@angular/common';
import { DeleteModalComponent } from './aquarium/aquarium-list/delete-modal/delete-modal.component';

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
    ReactiveFormsModule
  ],
  providers: [
    AquariumService,
    LivestockService,
    SharedDataService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
