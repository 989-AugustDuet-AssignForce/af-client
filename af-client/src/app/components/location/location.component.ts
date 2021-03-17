import { LocationDetailsDto } from './../../models/location-details-dto';
import { LocationService } from './../../services/location.service';
import { LocationDto } from './../../models/location-dto';
import { Component, OnInit, NgModule, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { LocationRequestDto } from 'src/app/models/location-request-dto';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  pulledLocations: LocationDto[];
  allLocations: LocationDto[];
  locationDto: LocationDto;
  locationDetailsDto: LocationDetailsDto;

  constructor(
    private locationService: LocationService,
    private router: Router
  ) {}

  @Input() locationRequestDto = {state: '', city: '', zipCode: ''}

  ngOnInit(): void {
    this.locationService
      .getAllLocations()
      .subscribe((locations: LocationDto[]) => {
        this.allLocations = locations;
        this.pulledLocations = locations;
      });
  }

  deleteLocation(index: number): any {
    this.locationService.deleteLocation(index).subscribe((data: {}) => {
      alert('Location deleted!');
      this.router.navigate([''])
    });
  }

  backButton(): void {
    this.router.navigateByUrl('');
  }

  searchCity(cityForm): void {
    let city = cityForm.value.searchCity;
    this.locationService.getLocationsByCity(city).subscribe((response) => {
      this.pulledLocations = response;
    })
  }

  searchState(stateForm): void {
    let state = stateForm.value.searchState;
    this.locationService.getLocationsByState(state).subscribe((response) => {
      this.pulledLocations = response;
    });
  }

  searchZip(zipForm): void {
    let zip = zipForm.value.searchZip;
    this.locationService.getLocationsByZipCode(zip).subscribe((response) => {
      this.pulledLocations = response;
    })
  }

  postLocations(locationRequestDto: LocationRequestDto) {
    this.locationService.createLocation(locationRequestDto).subscribe((data: {}) => {
      alert('Location added!');
      location.reload();
    })
  }


  selectSearchType(typeForm): void {
    let type = typeForm.value.searchType;
   if(type == 'city') {
      document.getElementById('state-form').style.display = 'none';
      document.getElementById('zip-form').style.display = 'none';
      document.getElementById('city-form').style.display = 'block';
    } else if(type == 'state') {
      document.getElementById('city-form').style.display = 'none';
      document.getElementById('zip-form').style.display = 'none';
      document.getElementById('state-form').style.display = 'block';
    } else if(type == 'zip') {
      document.getElementById('city-form').style.display = 'none';
      document.getElementById('state-form').style.display = 'none';
      document.getElementById('zip-form').style.display = 'block';
    }
    
  }

}


