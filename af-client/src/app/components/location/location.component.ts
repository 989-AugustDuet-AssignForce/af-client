import {
  Component,
  OnInit
} from '@angular/core';

import { LocationDto } from '../../models/location-dto';
import { LocationService } from '../../services/location.service';
import { MessageService } from '../../services/message.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  locations: LocationDto[];
  selectedLocation: LocationDto;
  constructor(private locationService: LocationService,
    private messageService: MessageService) { }

  // onSelect(location: LocationDto): void {
  //   this.selectedLocation = location;
  // }

  onSelect(location: LocationDto): void {
    this.selectedLocation = location;
    this.messageService.add(`LocationComponent: Selected location id=${location.locationId}`);
  }

  getLocations(): void {
    this.locationService
      .getLocations()
      .subscribe((locations) => (this.locations = locations));
  }
  ngOnInit(): void {
    this.getLocations();
  }
}
