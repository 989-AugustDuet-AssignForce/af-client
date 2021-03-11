import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css'],
})
export class LocationDetailComponent implements OnInit {
  @Input() selectedLocation: any;
  constructor(private locationService: LocationService,
    private route: ActivatedRoute,
    private location: Location
    ) {}

    ngOnInit(): void {
      //this.getHero();
    }
  
    // getHero(): void {
    //   const id = +this.route.snapshot.paramMap.get('id');
    //   this.locationService.getLocation(id)
    //     .subscribe(location => this.locationDto = location);
    // }
  
    goBack(): void {
      this.location.back();
    }
}
