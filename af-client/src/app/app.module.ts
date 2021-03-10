import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { LocationComponent } from './components/location/location.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { BuildingComponent } from './components/building/building.component';
import { RoomComponent } from './components/room/room.component';
import { LocationService } from './services/location.service';
import { ReservationService } from './services/reservation.service';
import { RoomCalendarComponent } from './components/room-calendar/room-calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    ReservationComponent,
    BuildingComponent,
    RoomComponent,
    RoomCalendarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide:DateAdapter,
      useFactory:adapterFactory
    })
  ],
  
  providers: [
    LocationService,
    ReservationService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
