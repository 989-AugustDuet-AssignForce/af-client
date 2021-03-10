import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingComponent } from './components/building/building.component';
import { LocationComponent } from './components/location/location.component';
import { ReservationComponent } from './components/reservation/reservation.component';

import { RoomComponent } from './components/room/room.component';

const routes: Routes = [
  // { path: '', redirectTo: '/location', pathMatch: 'full' },
  {path: 'location', component: LocationComponent},
  {path: 'building', component: BuildingComponent},
  {path: 'room', component: RoomComponent},
  {path: 'reservation', component: ReservationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
