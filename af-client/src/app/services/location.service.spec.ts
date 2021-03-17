import { environment } from '../../environments/environment';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LocationDto } from '../models/location-dto';
import { LocationDetailsDto } from '../models/location-details-dto';
import { LocationRequestDto } from '../models/location-request-dto';
import { BuildingDto } from './../models/building-dto';

import { LocationService } from './location.service';

describe('LocationService', () => {
  let service: LocationService;

  let httpMock: HttpTestingController;
  let buildings: BuildingDto[];
  let locations: LocationDto[];
  let location: LocationDetailsDto;
  let locationRequest: LocationRequestDto;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(LocationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  buildings = [
    new BuildingDto( 1, '11730 Plaza America Dr.', 6, 10 )
  ]
  locations = [
    new LocationDto( 1, 'Reston', 'VA', '20190', 1 ),
    new LocationDto( 2, 'Tampa', 'FL', '33620', 2 ),
    new LocationDto( 3, 'Arlington', 'TX', '76019', 1 )
    // new LocationDto( 3, 'Reston', 'TX', '20190', 1 )
  ];
  location = new LocationDetailsDto( 1, 'Reston', 'VA', '20190', buildings )
  locationRequest = new LocationRequestDto('Orlando', 'FL', '23405')


  it('should instantiate service', () => {
    expect(service).toBeTruthy();
  })

  it('should be an array of all locations', () => {
    let req = service.getAllLocations()
      .subscribe((r: LocationDto[]) => {
        expect(r).toEqual(locations);
      });

    const url = environment.locationBackendUrl + '/locations/';
    const mockReq = httpMock.expectOne(url);

    expect(mockReq.cancelled).toBeFalsy();
    mockReq.flush(locations);
    httpMock.verify();
    req.unsubscribe();
  });

  it('should be an array of all locations by a given city', () => {
    const restonLocation: LocationDto[] = [locations[0]];
    let req = service.getLocationsByCity("Reston")
      .subscribe((r: LocationDto[]) => {
        expect(r).toEqual(restonLocation);
      });

    const url = environment.locationBackendUrl + '/locations/city/Reston';
    const mockReq = httpMock.expectOne(url);

    expect(mockReq.cancelled).toBeFalsy();
    mockReq.flush(restonLocation);
    httpMock.verify();
    req.unsubscribe();
  });

  it('should be an array of all locations by a given state', () => {
    const vaLocation:LocationDto[] = [locations[0]];

    let req = service.getLocationsByState('VA')
      .subscribe((r: LocationDto[]) => {
        expect(r).toEqual(vaLocation);
      });

    const url = environment.locationBackendUrl + '/locations/state/VA';
    const mockReq = httpMock.expectOne(url);

    expect(mockReq.cancelled).toBeFalsy();
    mockReq.flush(vaLocation);
    httpMock.verify();
    req.unsubscribe();
  });

  it('should be an array of all locations by a given zip code', () => {
    const vaLocation:LocationDto[] = [locations[0]];

    let req = service.getLocationsByZipCode('20190')
      .subscribe((r: LocationDto[]) => {
        expect(r).toEqual(vaLocation);
      });

    const url = environment.locationBackendUrl + '/locations/zip/20190';
    const mockReq = httpMock.expectOne(url);

    expect(mockReq.cancelled).toBeFalsy();
    mockReq.flush(vaLocation);
    httpMock.verify();
    req.unsubscribe();
  });

  it('should be a location details dto by a given ID', () => {
    const loc:LocationDetailsDto = location;

    let req = service.getLocationById(1)
      .subscribe((r: LocationDetailsDto) => {
        expect(r).toEqual(loc);
      });

    const url = environment.locationBackendUrl + '/locations/id/1';
    const mockReq = httpMock.expectOne(url);

    expect(mockReq.cancelled).toBeFalsy();
    mockReq.flush(loc);
    httpMock.verify();
    req.unsubscribe();
  });
 
  it('should create a Location based on the LocationRequestDto provided', () => {
    const expected = {
      message: "Location created successfully"
    }
    let req = service.createLocation(locationRequest).subscribe((response: any) =>{
      expect(response).toEqual(expected);
    });
    const url = environment.locationBackendUrl + '/locations';
    const mockRequest = httpMock.expectOne(url);
    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(expected);
    httpMock.verify();
    req.unsubscribe();
  });

  it('should update an existing Location based on the LocationRequestDto provided', () => {
    const expected = {
      message: "Location has been updated successfully"
    }
    let request = service.updateLocation(1,locationRequest)
      .subscribe((response: any) => {
        expect(response).toEqual(expected);
      });
    const url = environment.locationBackendUrl + '/locations/1';
    const mockRequest = httpMock.expectOne(url);
    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(expected);
    httpMock.verify();
    request.unsubscribe();
  });

  it('should delete an existing Location based on the id provided', () => {
    const expected = {
      message: "Location has been deleted successfully"
    };
    let request = service.deleteLocation(1)
      .subscribe((response: any) => {
        expect(response).toEqual(expected);
      });
      const url = environment.locationBackendUrl + '/locations/1';
      const mockRequest = httpMock.expectOne(url);
      expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(expected);
    httpMock.verify();
    request.unsubscribe();
  });
});
