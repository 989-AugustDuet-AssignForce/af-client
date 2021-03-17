import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { ActivatedRoute } from '@angular/router';
import { LocationDetailsDto } from 'src/app/models/location-details-dto';
import { LocationRequestDto } from 'src/app/models/location-request-dto';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {

  locationRequestDto: LocationRequestDto;
  locationDto: LocationDetailsDto;
  message: string;
  

  constructor(private locationService: LocationService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.getLocation();
  }

  delete(): void{
    this.locationService.deleteLocation(this.locationDto.id).subscribe((response) => {
      this.message = response.message;
    });
  }

  async update(): Promise<void> {
    this.locationRequestDto = new LocationRequestDto(this.locationDto.state, this.locationDto.city, this.locationDto.zipCode);
    this.locationService.updateLocation(this.locationDto.id, this.locationRequestDto)
    .subscribe((response) => {
      this.message = response.message;
    });
  }

  async getLocation(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    this.locationService.getLocationById(parseInt(id)).subscribe((response) => {
      this.locationDto = response;
    });

  }

}
