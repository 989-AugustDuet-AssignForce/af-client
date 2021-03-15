import { LocationDetailsDto } from './../models/location-details-dto';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationDto } from '../models/location-dto';
import { LocationRequestDto } from '../models/location-request-dto';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  apiBase = environment.locationBackendUrl;

  constructor(private http: HttpClient) { }

  getAllLocations(): Observable<Array<LocationDto>> {
    return this.http.get<LocationDto[]>(`${this.apiBase}/locations/`);
  }

  getLocationsByState(state: string) {
    return this.http.get<LocationDto[]>(`${this.apiBase}/locations/state/${state}`);
  }

  getLocationsByCity(city: string) {
    return this.http.get<LocationDto[]>(`${this.apiBase}/locations/city/${city}`);
  }

  getLocationsByZipCode(zipCode: string) {
    return this.http.get<LocationDto[]>(`${this.apiBase}/locations/zip/${zipCode}`);
  }

  getLocationById(index:number) {
    return this.http.get<LocationDetailsDto>(`${this.apiBase}/locations/id/${index}`);
  }

  createLocation(locationRequestDto: LocationRequestDto) {
    return this.http.post<LocationRequestDto>(`${this.apiBase}/locations`, locationRequestDto)
  }

  updateLocation(index:number,locationRequestDto: LocationRequestDto) {
    return this.http.put<LocationRequestDto>(`${this.apiBase}/locations/${index}`, locationRequestDto)
  }

  updateLocationZipCode(index: number, zipCode: string) {
    return this.http.patch<string>(`${this.apiBase}/locations/${index}/updateZipCode`,zipCode);
  }

  updateLocationCity(index: number, city: string) {
    return this.http.patch<string>(`${this.apiBase}/locations/${index}/updateCity`, city)
  }

  updateLocationState(index: number, state: string){
    return this.http.patch<string>(`${this.apiBase}/locations/${index}/updateState`, state)
  }

  deleteLocation(index: number){
    return this.http.delete<string>(`${this.apiBase}/locations/${index}`)
  }

}
