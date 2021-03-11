import { Injectable } from '@angular/core';

import {
  Observable,
  of
} from 'rxjs';

import { LocationDto } from '../models/location-dto';
import { LOCATIONS } from '../models/mock-location';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private messageService: MessageService) { }

  getAllLocations() {}

  getLocationsByState(state: string) {}

  getLocationsByCity(city: string) {}

  getLocationsByZipCode(zipCode: string) {}

  getLocationById(x:number) {}

  getLocations(): Observable<LocationDto[]> {
    
    this.messageService.add('LocationService: fetched locations');
      return of(LOCATIONS);
  }

  getLocation(id:number): Observable<LocationDto> {
    this.messageService.add(`LocationService: fetched location locationId=${id}`);
  return of(LOCATIONS.find(location => location.locationId === id));
  }

}
