import { SharedDataService } from './services/shared-data.service';
import { LivestockService } from "./services/livestock.service";
import { AquariumService } from "./services/aquarium.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { AquariumComponent } from "./aquarium/aquarium.component";
import { AquariumListComponent } from "./aquarium/aquarium-list/aquarium-list.component";
import { AquariumDetailComponent } from "./aquarium/aquarium-detail/aquarium-detail.component";
import { AquariumFormComponent } from "./aquarium/aquarium-form/aquarium-form.component";
import { LivestockComponent } from "./livestock/livestock.component";
import { LivestockListComponent } from "./livestock/livestock-list/livestock-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { LivestockFormComponent } from './livestock/livestock-form/livestock-form.component';
import { LivestockAqDetailsComponent } from './livestock/livestock-aq-details/livestock-aq-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AquariumComponent,
    AquariumListComponent,
    AquariumDetailComponent,
    AquariumFormComponent,
    LivestockComponent,
    LivestockListComponent,
    LivestockFormComponent,
    LivestockAqDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [AquariumService, LivestockService, SharedDataService, AquariumListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
