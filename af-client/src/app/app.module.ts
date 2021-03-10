import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './components/location/location.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { BuildingComponent } from './components/building/building.component';
import { RoomComponent } from './components/room/room.component';
import { LocationService } from './services/location.service';
import { ReservationService } from './services/reservation.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    ReservationComponent,
    BuildingComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [
    LocationService,
    ReservationService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
