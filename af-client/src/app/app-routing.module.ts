import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';
import { LocationComponent } from './components/location/location.component';

const routes: Routes = [
  { path: 'location', component: LocationComponent },
  { path: 'location/detail/:locationId', component: LocationDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
