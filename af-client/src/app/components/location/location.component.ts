import { Component, OnInit } from '@angular/core';
import {LOCATIONS } from '../../models/mock-location'
import {LocationDto } from '../../models/location-dto'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locations = LOCATIONS
  selectedLocation: LocationDto
  constructor() { }
  onSelect(location: LocationDto): void {
    this.selectedLocation = location;
  }
  ngOnInit(): void {
    
  }

}
