import { Injectable } from '@angular/core';

import {
  Observable,
  of
} from 'rxjs';

import { LocationDto } from '../models/location-dto';
import { LOCATIONS } from '../models/mock-location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getAllLocations() {}

  getLocationsByState(state: string) {}

  getLocationsByCity(city: string) {}

  getLocationsByZipCode(zipCode: string) {}

  getLocationById(x:number) {}

  getLocations(): Observable<LocationDto[]> {
    const locations = of(LOCATIONS);
      return locations;
  }

}
