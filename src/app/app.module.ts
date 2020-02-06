import { AquariumListService } from './aquarium/aquarium-list/aquarium-list.service';
import { AquariumService } from './aquarium/aquarium.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AquariumComponent } from './aquarium/aquarium.component';
import { LivestockComponent } from './livestock/livestock.component';
import { LivestockListComponent } from './livestock/livestock-list/livestock-list.component';
import { AquariumListComponent } from './aquarium/aquarium-list/aquarium-list.component';
import { AquariumDetailComponent } from './aquarium/aquarium-detail/aquarium-detail.component';
import { LivestockDetailComponent } from './livestock/livestock-detail/livestock-detail.component';
import { HomeComponent } from './home/home.component';
import { AquariumFormComponent } from './aquarium/aquarium-form/aquarium-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AquariumComponent,
    LivestockComponent,
    LivestockListComponent,
    AquariumListComponent,
    AquariumDetailComponent,
    LivestockDetailComponent,
    HomeComponent,
    AquariumFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AquariumService,
    AquariumListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
