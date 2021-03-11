import {
  Component,
  OnInit
} from '@angular/core';

import { LocationDto } from '../../models/location-dto';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locations: LocationDto[]
  selectedLocation: LocationDto
  constructor(private locationService: LocationService) { }
  onSelect(location: LocationDto): void {
    this.selectedLocation = location;
  }

  getLocations():void {
    this.locations = this.locationService.getLocations();
  }
  ngOnInit(): void {
    this.getLocations();
  }
}
