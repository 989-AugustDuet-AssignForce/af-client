import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LocationService } from '../../services/location.service';
import { LocationDto } from 'src/app/models/location-dto';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css'],
})
export class LocationDetailComponent implements OnInit {
  locationDto: LocationDto
  constructor(private locationService: LocationService,
    private route: ActivatedRoute,
    private location: Location
    ) {}

    ngOnInit(): void {
      this.getLocation();
    }
  
    getLocation(): void {
      const id = +this.route.snapshot.paramMap.get('locationId');
      this.locationService.getLocation(id)
        .subscribe(location => this.locationDto = location);
    }
  
    goBack(): void {
      this.location.back();
    }
}
