import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './components/location/location.component';
import { BuildingComponent } from './components/building/building.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { RoomComponent } from './components/room/room.component';
import { ReservationDetailComponent } from './components/reservation-detail/reservation-detail.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';

const routes: Routes = [
  // { path: '', redirectTo: '/location', pathMatch: 'full' },
  { path: 'location', component: LocationComponent },
  { path: 'building', component: BuildingComponent },
  { path: 'room', component: RoomComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'reservation/:reservationId', component: ReservationDetailComponent },
  { path: 'room/:roomId', component: RoomDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
