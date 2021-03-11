import { LocationDetailsDto } from './../../models/location-details-dto';
import { LocationService } from './../../services/location.service';
import { LocationDto } from './../../models/location-dto';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  pulledLocations: LocationDto[];
  constructor(
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.locationService
      .getAllLocations()
      .subscribe((locations: LocationDto[]) => {
        console.log('getting locations');
        this.pulledLocations = locations;
      });
  }

  backButton(): void {
    this.router.navigateByUrl('');
  }

  searchCity(cityForm): void {
    let city = cityForm.value.searchCity;
    console.log(city);
    this.displayCityLocations(city);
  }

  searchState(stateForm): void {
    let state = stateForm.value.searchState;
    console.log(state);
    this.displayStateLocations(state);
  }

  searchZip(zipForm): void {
    let zip = zipForm.value.searchZip;
    console.log(zip);
    this.displayZipCodeLocations(zip);
  }

  searchId(idForm): void {
    let id = idForm.value.searchId;
    console.log(id);
    this.displayIdLocation(id);
  }

  displayCityLocations(city): void {
    this.locationService
      .getLocationsByCity(city)
      .subscribe((searchResults: LocationDto[]) => {
        searchResults.forEach(function (value) {
          if (value.city) {
            if (document.getElementById('search-div')) {
              document.getElementById('search-div').remove();
            }

            let searchedDiv = document.createElement('div');
            searchedDiv.id = 'search-div';
            let h3 = document.createElement('h3');
            let ptag1 = document.createElement('p');
            let ptag2 = document.createElement('p');
            let ptag3 = document.createElement('p');
            h3.innerText = 'Location Search Results: ';
            ptag1.innerText = 'ID: ' + value.id;
            ptag2.innerText =
              value.city + ' ' + value.state + ' ' + value.zipCode;
            ptag3.innerText = 'Buildings: ' + value.numBuildings;
            searchedDiv.appendChild(h3);
            searchedDiv.appendChild(ptag1);
            searchedDiv.appendChild(ptag2);
            searchedDiv.appendChild(ptag3);

            document.getElementById('search-results-div').appendChild(searchedDiv);
          }
        });
      });
  }

  displayStateLocations(state): void {
    this.locationService
      .getLocationsByState(state)
      .subscribe((searchResults: LocationDto[]) => {
        searchResults.forEach(function (value) {
          if (value.state) {
            if (document.getElementById('search-div')) {
              document.getElementById('search-div').remove();
            }

            let searchedDiv = document.createElement('div');
            searchedDiv.id = 'search-div';
            let h3 = document.createElement('h3');
            let ptag1 = document.createElement('p');
            let ptag2 = document.createElement('p');
            let ptag3 = document.createElement('p');
            h3.innerText = 'Location Search Results: ';
            ptag1.innerText = 'ID: ' + value.id;
            ptag2.innerText =
              value.city + ' ' + value.state + ' ' + value.zipCode;
            ptag3.innerText = 'Buildings: ' + value.numBuildings;
            searchedDiv.appendChild(h3);
            searchedDiv.appendChild(ptag1);
            searchedDiv.appendChild(ptag2);
            searchedDiv.appendChild(ptag3);

            document.getElementById('search-results-div').appendChild(searchedDiv);
          }
        });
      });
  }

  displayZipCodeLocations(zipCode): void {
    this.locationService
      .getLocationsByZipCode(zipCode)
      .subscribe((searchResults: LocationDto[]) => {
        searchResults.forEach(function (value) {
          if (value.zipCode) {
            if (document.getElementById('search-div')) {
              document.getElementById('search-div').remove();
            }

            let searchedDiv = document.createElement('div');
            searchedDiv.id = 'search-div';
            let h3 = document.createElement('h3');
            let ptag1 = document.createElement('p');
            let ptag2 = document.createElement('p');
            let ptag3 = document.createElement('p');
            h3.innerText = 'Location Search Results: ';
            ptag1.innerText = 'ID: ' + value.id;
            ptag2.innerText =
              value.city + ' ' + value.state + ' ' + value.zipCode;
            ptag3.innerText = 'Buildings: ' + value.numBuildings;
            searchedDiv.appendChild(h3);
            searchedDiv.appendChild(ptag1);
            searchedDiv.appendChild(ptag2);
            searchedDiv.appendChild(ptag3);

            document.getElementById('search-results-div').appendChild(searchedDiv);
          }
        });
      });
  }

  displayIdLocation(index): void {
    this.locationService
      .getLocationById(index)
      .subscribe((searchResults: LocationDetailsDto) => {
        if (searchResults.id) {
          if (document.getElementById('search-div')) {
            document.getElementById('search-div').remove();
          }

          let searchedDiv = document.createElement('div');
          searchedDiv.id = 'search-div';
          let h3 = document.createElement('h3');
          let ptag1 = document.createElement('p');
          let ptag2 = document.createElement('p');
          let ptag3 = document.createElement('p');
          h3.innerText = 'Location Search Results: ';
          ptag1.innerText = 'ID: ' + searchResults.id;
          ptag2.innerText =
            searchResults.city +
            ' ' +
            searchResults.state +
            ' ' +
            searchResults.zipCode;
          ptag3.innerText = 'Buildings: ' + searchResults.buildings.length;
          let buildingdiv = document.createElement('div');

          searchResults.buildings.forEach(function (value) {
            console.log(value.id);
            let buildingtag1 = document.createElement('p');
            let buildingtag2 = document.createElement('p');
            let buildingtag3 = document.createElement('p');
            let buildingtag4 = document.createElement('p');
            let buildingbr = document.createElement('br');
            buildingtag1.innerText = 'Building ID: ' + value.id;
            buildingtag2.innerText = value.street_address;
            buildingtag3.innerText = 'Floors: ' + value.totalFloors;
            buildingtag4.innerText = 'Rooms: ' + value.numRooms;

            buildingdiv.style.marginLeft = '5%';
            buildingdiv.appendChild(buildingtag1);
            buildingdiv.appendChild(buildingtag2);
            buildingdiv.appendChild(buildingtag3);
            buildingdiv.appendChild(buildingtag4);
            buildingdiv.appendChild(buildingbr);
          });
          searchedDiv.appendChild(h3);
          searchedDiv.appendChild(ptag1);
          searchedDiv.appendChild(ptag2);
          searchedDiv.appendChild(ptag3);
          searchedDiv.appendChild(buildingdiv);

          document.getElementById('search-results-div').appendChild(searchedDiv);
        }
      });
  }

  selectSearchType(typeForm): void {
    let type = typeForm.value.searchType;
    console.log('search type: '+type);
    if(type == 'id') {
      document.getElementById('city-form').style.display = 'none';
      document.getElementById('state-form').style.display = 'none';
      document.getElementById('zip-form').style.display = 'none';
      document.getElementById('id-form').style.display = 'block';
    } else if(type == 'city') {
      document.getElementById('id-form').style.display = 'none';
      document.getElementById('state-form').style.display = 'none';
      document.getElementById('zip-form').style.display = 'none';
      document.getElementById('city-form').style.display = 'block';
    } else if(type == 'state') {
      document.getElementById('id-form').style.display = 'none';
      document.getElementById('city-form').style.display = 'none';
      document.getElementById('zip-form').style.display = 'none';
      document.getElementById('state-form').style.display = 'block';
    } else if(type == 'zip') {
      document.getElementById('id-form').style.display = 'none';
      document.getElementById('city-form').style.display = 'none';
      document.getElementById('state-form').style.display = 'none';
      document.getElementById('zip-form').style.display = 'block';
    }
    
  }

  submitSearchType(searchForm): void {
    let val = searchForm.value.searchValue;
  }

  print(e:Event): void {
    e.preventDefault();
    console.log('hello');
  }



}


