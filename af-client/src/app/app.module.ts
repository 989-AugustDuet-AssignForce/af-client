import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LocationComponent } from './components/location/location.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { BuildingComponent } from './components/building/building.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RoomComponent } from './components/room/room.component';
import { ReservationDetailComponent } from './components/reservation-detail/reservation-detail.component';

import { LocationService } from './services/location.service';
import { ReservationService } from './services/reservation.service';
import { CaliberService } from './services/caliber.service';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    ReservationComponent,
    BuildingComponent,
    RoomComponent,
    NavbarComponent,
    ReservationDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [
    LocationService,
    ReservationService,
    CaliberService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
