import { AquariumDashboardModule } from './modules/aquarium-dashboard/aquarium-dashboard.module';
import { AquariumModule } from './modules/aquarium/aquarium.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { AquariumDashboardComponent } from './modules/aquarium-dashboard/aquarium-dasboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './modules/home/home.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { GalleryModule } from './modules/gallery/gallery.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AquariumDashboardComponent,
  ],
  imports: [
    AquariumModule,
    AquariumDashboardModule,
    GalleryModule,
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
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
