import { Injectable } from '@angular/core';

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

}
