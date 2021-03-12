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
  constructor(
    private locationService: LocationService,
    private router: Router
  ) {}

  @Input() locationRequestDto = {state: '', city: '', zipCode: ''}

  ngOnInit(): void {
    this.locationService
      .getAllLocations()
      .subscribe((locations: LocationDto[]) => {
        this.pulledLocations = locations;
      });
  }

  backButton(): void {
    this.router.navigateByUrl('');
  }

  searchCity(cityForm): void {
    let city = cityForm.value.searchCity;
    this.displayCityLocations(city);
  }

  searchState(stateForm): void {
    let state = stateForm.value.searchState;
    this.displayStateLocations(state);
  }

  searchZip(zipForm): void {
    let zip = zipForm.value.searchZip;
    this.displayZipCodeLocations(zip);
  }

  searchId(idForm): void {
    let id = idForm.value.searchId;
    this.displayIdLocation(id);
  }

  postLocations(locationRequestDto: LocationRequestDto) {
    this.locationService.createLocation(locationRequestDto).subscribe((data: {}) => {
      alert('Location added!');
      this.router.navigate([''])
    })
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
            let updatebutton = document.createElement('button');
            let deletebutton = document.createElement('button');
            h3.innerText = 'Location Search Results: ';
            ptag1.innerText = 'ID: ' + value.id;
            ptag2.innerText =
              value.city + ' ' + value.state + ' ' + value.zipCode;
            ptag3.innerText = 'Buildings: ' + value.numBuildings;
            updatebutton.append('Update');
            updatebutton.style.marginRight = '10px';
            deletebutton.append('Delete');
            searchedDiv.appendChild(h3);
            searchedDiv.appendChild(ptag1);
            searchedDiv.appendChild(ptag2);
            searchedDiv.appendChild(ptag3);
            searchedDiv.appendChild(updatebutton);
            searchedDiv.appendChild(deletebutton);

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
            let updatebutton = document.createElement('button');
            let deletebutton = document.createElement('button');
            h3.innerText = 'Location Search Results: ';
            ptag1.innerText = 'ID: ' + value.id;
            ptag2.innerText =
              value.city + ' ' + value.state + ' ' + value.zipCode;
            ptag3.innerText = 'Buildings: ' + value.numBuildings;
            updatebutton.append('Update');
            updatebutton.style.marginRight = '10px';
            deletebutton.append('Delete');
            searchedDiv.appendChild(h3);
            searchedDiv.appendChild(ptag1);
            searchedDiv.appendChild(ptag2);
            searchedDiv.appendChild(ptag3);
            searchedDiv.appendChild(updatebutton);
            searchedDiv.appendChild(deletebutton);

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
            let updatebutton = document.createElement('button');
            let deletebutton = document.createElement('button');
            h3.innerText = 'Location Search Results: ';
            ptag1.innerText = 'ID: ' + value.id;
            ptag2.innerText =
              value.city + ' ' + value.state + ' ' + value.zipCode;
            ptag3.innerText = 'Buildings: ' + value.numBuildings;
            updatebutton.append('Update');
            updatebutton.style.marginRight = '10px';
            deletebutton.append('Delete');
            searchedDiv.appendChild(h3);
            searchedDiv.appendChild(ptag1);
            searchedDiv.appendChild(ptag2);
            searchedDiv.appendChild(ptag3);
            searchedDiv.appendChild(updatebutton);
            searchedDiv.appendChild(deletebutton);

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
          let updatebutton = document.createElement('button');
          let deletebutton = document.createElement('button');
          h3.innerText = 'Location Search Results: ';
          ptag1.innerText = 'ID: ' + searchResults.id;
          ptag2.innerText =
            searchResults.city +
            ' ' +
            searchResults.state +
            ' ' +
            searchResults.zipCode;
          ptag3.innerText = 'Buildings: ' + searchResults.buildings.length;
          updatebutton.append('Update');
          updatebutton.style.marginRight = '10px';
          deletebutton.append('Delete');
          let buildingdiv = document.createElement('div');

          searchResults.buildings.forEach(function (value) {
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
          searchedDiv.appendChild(updatebutton);
          searchedDiv.appendChild(deletebutton);

          document.getElementById('search-results-div').appendChild(searchedDiv);
        }
      });
  }

  selectSearchType(typeForm): void {
    let type = typeForm.value.searchType;
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

}


