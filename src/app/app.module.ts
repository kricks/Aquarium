import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { AquariumComponent } from './modules/aquarium/aquarium.component';
import { AquariumListComponent } from './modules/aquarium/aquarium-list/aquarium-list.component';
import { AquariumDetailComponent } from './modules/aquarium/aquarium-detail/aquarium-detail.component';
import { AquariumFormComponent } from './modules/aquarium/aquarium-form/aquarium-form.component';
import { AquariumDashboardComponent } from './modules/aquarium-dashboard/aquarium-dasboard.component';
import { LivestockListComponent } from './modules/aquarium-dashboard/livestock-list/livestock-list.component';
import { LivestockFormComponent } from './modules/aquarium-dashboard/livestock-form/livestock-form.component';
import { LivestockAqDetailsComponent } from './modules/aquarium-dashboard/livestock-aq-details/livestock-aq-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DeleteModalComponent } from './modules/aquarium/aquarium-list/delete-modal/delete-modal.component';
import { HomeComponent } from './modules/home/home.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { ImageFormComponent } from './modules/gallery/image-form/image-form.component';
import { GalleryListComponent } from './modules/gallery/gallery-list/gallery-list.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { GalleryFilterComponent } from './modules/gallery/gallery-filter/gallery-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AquariumComponent,
    AquariumListComponent,
    AquariumDetailComponent,
    AquariumFormComponent,
    AquariumDashboardComponent,
    LivestockListComponent,
    LivestockFormComponent,
    LivestockAqDetailsComponent,
    DeleteModalComponent,
    GalleryComponent,
    ImageFormComponent,
    GalleryListComponent,
    GalleryFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoggerModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.INFO,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
