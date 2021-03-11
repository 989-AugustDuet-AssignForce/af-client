import { Injectable } from '@angular/core';

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

  getLocations(): LocationDto[] {
      return LOCATIONS;
  }

}
