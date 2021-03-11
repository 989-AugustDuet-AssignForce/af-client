import {
  Component,
  OnInit
} from '@angular/core';

import { LocationDto } from '../../models/location-dto';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  locations: LocationDto[];
  constructor(private locationService: LocationService) { }

  getLocations(): void {
    this.locationService
      .getLocations()
      .subscribe((locations) => (this.locations = locations));
  }
  ngOnInit(): void {
    this.getLocations();
  }
}
