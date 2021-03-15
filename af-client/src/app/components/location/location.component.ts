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
      location.reload();
    })
  }

  updateLocation(): any {
    let updateForm = document.createElement('form');
    let cityspan = document.createElement('span');
    let cityinput = document.createElement('input');
    let statespan = document.createElement('span');
    let stateinput = document.createElement('input');
    let zipspan = document.createElement('span');
    let zipinput = document.createElement('input');
    let submitupdatebutton = document.createElement('button');
    cityspan.append('City: ');
    cityinput.setAttribute('type','text');
    cityinput.setAttribute('value',this.locationDto.city);
    statespan.append('State: ');
    stateinput.setAttribute('type','text');
    stateinput.setAttribute('value',this.locationDto.state);
    zipspan.append('Zip Code: ');
    zipinput.setAttribute('type','text');
    zipinput.setAttribute('value',this.locationDto.zipCode);
    submitupdatebutton.append('Submit');
    submitupdatebutton.setAttribute('type','submit');
    updateForm.appendChild(cityspan);
    updateForm.appendChild(cityinput);
    updateForm.appendChild(statespan);
    updateForm.appendChild(stateinput);
    updateForm.appendChild(zipspan);
    updateForm.appendChild(zipinput);
    updateForm.appendChild(submitupdatebutton);
    document.getElementById('updateLocation-div').appendChild(updateForm);
  }

  displayCityLocations(city): void {
    this.locationService
      .getLocationsByCity(city)
      .subscribe((searchResults: LocationDto[]) => {
        this.locationDto = searchResults[0];
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
            ptag2.innerText = value.city + ' ' + value.state + ' ' + value.zipCode;
            ptag3.innerText = 'Buildings: ' + value.numBuildings;
            updatebutton.append('Update');
            updatebutton.style.marginRight = '10px';
            deletebutton.append('Delete');

            let submitupdatebutton = document.createElement('button');
            let updatedObj: LocationDto = new LocationDto(0, '', '', '');
            function showObject(): any {
              updatedObj.id = value.id;
              updatedObj.city = cityinput.value;
              updatedObj.state = stateinput.value;
              updatedObj.zipCode = zipinput.value;
              console.log('uobj id: '+updatedObj.id);
              console.log('uobj city: '+updatedObj.city);
              console.log('uobj state: '+updatedObj.state);
              console.log('uobj zipcode: '+updatedObj.zipCode);
          }

            // deletebutton.onclick(this.deleteLocation(value.id));
            let cityinput = document.createElement('input');
            let stateinput = document.createElement('input');
            let zipinput = document.createElement('input');
            function updateLocationButton(): any {
              let updateForm = document.createElement('div');
              let cityspan = document.createElement('span');
              let statespan = document.createElement('span');
              let zipspan = document.createElement('span');
              cityspan.append('City: ');
              cityinput.setAttribute('type','text');
              cityinput.setAttribute('value',value.city);
              statespan.append('State: ');
              stateinput.setAttribute('type','text');
              stateinput.setAttribute('value',value.state);
              zipspan.append('Zip Code: ');
              zipinput.setAttribute('type','text');
              zipinput.setAttribute('value',value.zipCode);
              submitupdatebutton.append('Submit');

              updateForm.appendChild(cityspan);
              updateForm.appendChild(cityinput);
              updateForm.appendChild(document.createElement('br'));
              updateForm.appendChild(statespan);
              updateForm.appendChild(stateinput);
              updateForm.appendChild(document.createElement('br'));
              updateForm.appendChild(zipspan);
              updateForm.appendChild(zipinput);
              updateForm.appendChild(document.createElement('br'));
              updateForm.appendChild(submitupdatebutton);
              searchedDiv.appendChild(document.createElement('br'));
              searchedDiv.appendChild(document.createElement('br'));
              searchedDiv.appendChild(updateForm);
              updatebutton.disabled = true;
            }
            updatebutton.addEventListener('click', updateLocationButton);
            submitupdatebutton.addEventListener('click', showObject);

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
        this.locationDto = searchResults[0];
        if (document.getElementById('search-div')) {
          document.getElementById('search-div').remove();
        }
        let h3 = document.createElement('h3');
        h3.innerText = 'Location Search Results: ';
        document.getElementById('search-results-div').appendChild(h3);

        searchResults.forEach(function (value) {
          console.log('size: '+searchResults.length);
          if (value.state) {

            let searchedDiv = document.createElement('div');
            searchedDiv.id = 'search-div';
            let ptag1 = document.createElement('p');
            let ptag2 = document.createElement('p');
            let ptag3 = document.createElement('p');
            let updatebutton = document.createElement('button');
            let deletebutton = document.createElement('button');
            ptag1.innerText = 'ID: ' + value.id;
            ptag2.innerText =
              value.city + ' ' + value.state + ' ' + value.zipCode;
            ptag3.innerText = 'Buildings: ' + value.numBuildings;
            updatebutton.append('Update');
            updatebutton.style.marginRight = '10px';
            deletebutton.append('Delete');
            // deletebutton.onclick(this.deleteLocation(value.id));
            // searchedDiv.appendChild(h3);
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
        this.locationDto = searchResults[0];
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
            // deletebutton.onclick(this.deleteLocation(value.id));
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
        this.locationDetailsDto = searchResults;
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
          // deletebutton.onclick(this.deleteLocation(searchResults.id));
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


