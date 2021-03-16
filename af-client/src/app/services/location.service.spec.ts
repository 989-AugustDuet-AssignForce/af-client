import { BuildingDto } from './../models/building-dto';
import { environment } from './../../environments/environment.prod';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LocationService } from './location.service';
import { LocationDto } from '../models/location-dto';
import { LocationDetailsDto } from '../models/location-details-dto';
import { LocationRequestDto } from '../models/location-request-dto';

describe('LocationService', () => {
  let service: LocationService;
  let buildings: BuildingDto[];
  let locations: LocationDto[];
  let location: LocationDetailsDto;
  let locationRequest: LocationRequestDto;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(LocationService);
    httpMock = TestBed.inject(HttpTestingController);

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
  });

  it('should instantiate service', () => {
    expect(service).toBeTruthy();
  })

  // it('should be an array of all locations', () => {
  //   let req = service.getAllLocations()
  //     .subscribe((r: LocationDto[]) => {
  //       expect(r).toEqual(locations);
  //     });

  //   const url = environment.locationBackendUrl;
  //   const mockReq = httpMock.expectOne(url);

  //   expect(mockReq.cancelled).toBeFalsy();
  //   mockReq.flush(locations);
  //   httpMock.verify();
  //   req.unsubscribe();
  // });

  // it('should be an array of all locations by a given city', () => {
  //   const restonLocation:LocationDto[] = [locations[0]];

  //   let req = service.getLocationsByCity('reston')
  //     .subscribe((r: LocationDto[]) => {
  //       expect(r).toEqual(restonLocation);
  //     });

  //   const url = environment.locationBackendUrl + '/locations/city/reston';
  //   const mockReq = httpMock.expectOne(url);

  //   expect(mockReq.cancelled).toBeFalsy();
  //   mockReq.flush(locations);
  //   httpMock.verify();
  //   req.unsubscribe();
  // });

  // it('should be an array of all locations by a given state', () => {
  //   const vaLocation:LocationDto[] = [locations[0]];

  //   let req = service.getLocationsByState('VA')
  //     .subscribe((r: LocationDto[]) => {
  //       expect(r).toEqual(vaLocation);
  //     });

  //   const url = environment.locationBackendUrl + '/locations/state/va';
  //   const mockReq = httpMock.expectOne(url);

  //   expect(mockReq.cancelled).toBeFalsy();
  //   mockReq.flush(locations);
  //   httpMock.verify();
  //   req.unsubscribe();
  // });

  // it('should be an array of all locations by a given zip code', () => {
  //   const vaLocation:LocationDto[] = [locations[0]];

  //   let req = service.getLocationsByZipCode('20190')
  //     .subscribe((r: LocationDto[]) => {
  //       expect(r).toEqual(vaLocation);
  //     });

  //   const url = environment.locationBackendUrl + '/locations/zip/20190';
  //   const mockReq = httpMock.expectOne(url);

  //   expect(mockReq.cancelled).toBeFalsy();
  //   mockReq.flush(locations);
  //   httpMock.verify();
  //   req.unsubscribe();
  // });

  // it('should be a location details dto by a given ID', () => {
  //   const loc:LocationDetailsDto = location;

  //   let req = service.getLocationById(1)
  //     .subscribe((r: LocationDetailsDto) => {
  //       expect(r).toEqual(loc);
  //     });

  //   const url = environment.locationBackendUrl + '/locations/id/1';
  //   const mockReq = httpMock.expectOne(url);

  //   expect(mockReq.cancelled).toBeFalsy();
  //   mockReq.flush(locations);
  //   httpMock.verify();
  //   req.unsubscribe();
  // });
 
  // it('should create a Location based on the LocationRequestDto provided', () => {
  //   let req = service.createLocation(locationRequest).subscribe((response: LocationRequestDto) =>{
  //     expect(response).toEqual(locationRequest);
  //     const url = environment.locationBackendUrl + '/locations/id/4';
  //     const mockRequest = httpMock.expectOne(url);
  //     expect(mockRequest.cancelled).toBeFalsy();
  //   mockRequest.flush(locationRequest);
  //   httpMock.verify();
  //   req.unsubscribe();
  //   })
  // });

  // it('should update an existing Location based on the LocationRequestDto provided', () => {
  //   let request = service.updateLocation(location.id,locationRequest)
  //     .subscribe((response: LocationRequestDto) => {
  //       expect(response).toEqual(locationRequest);
  //     });
  //   const url = environment.locationBackendUrl + "/locations/id/1";
  //   const mockRequest = httpMock.expectOne(url);
  //   expect(mockRequest.cancelled).toBeFalsy();
  //   mockRequest.flush(locationRequest);
  //   httpMock.verify();
  //   request.unsubscribe();
  // });

  // it('should update an existing Location based on the State provided', () => {
  //   let request = service.updateLocationState(location.id,locationRequest.state)
  //     .subscribe((response: any) => {
  //       expect(response).toEqual(locationRequest.state);
  //     });
  //   const url = environment.locationBackendUrl + "/locations/state/" + locationRequest.state;
  //   const mockRequest = httpMock.expectOne(url);
  //   expect(mockRequest.cancelled).toBeFalsy();
  //   mockRequest.flush(locationRequest);
  //   httpMock.verify();
  //   request.unsubscribe();
  // });

  // it('should update an existing Location based on the City provided', () => {
  //   let request = service.updateLocationCity(location.id,locationRequest.city)
  //     .subscribe((response: any) => {
  //       expect(response).toEqual(locationRequest.city);
  //     });
  //   const url = environment.locationBackendUrl + "/locations/city/" + locationRequest.city;
  //   const mockRequest = httpMock.expectOne(url);
  //   expect(mockRequest.cancelled).toBeFalsy();
  //   mockRequest.flush(locationRequest);
  //   httpMock.verify();
  //   request.unsubscribe();
  // });

  // it('should update an existing Location based on the zip code provided', () => {
  //   let request = service.updateLocationZipCode(location.id,locationRequest.zipCode)
  //     .subscribe((response: any) => {
  //       expect(response).toEqual(locationRequest.zipCode);
  //     });
  //   const url = environment.locationBackendUrl + "/locations/zipCode/" + locationRequest.zipCode;
  //   const mockRequest = httpMock.expectOne(url);
  //   expect(mockRequest.cancelled).toBeFalsy();
  //   mockRequest.flush(locationRequest);
  //   httpMock.verify();
  //   request.unsubscribe();
  // });

  // it('should delete an existing Location based on the zip code provided', () => {
  //   let request = service.deleteLocation(location.id)
  //     .subscribe((response: any) => {
  //       expect(response).toEqual(location.id);
  //     });
  //   const url = environment.locationBackendUrl + "/locations/id/" + location.id;
  //   const mockRequest = httpMock.expectOne(url);
  //   expect(mockRequest.cancelled).toBeTruthy;
  //   mockRequest.flush(locationRequest);
  //   httpMock.verify();
  //   request.unsubscribe();
  // });




  /**************************************************************************************
  * methods scraped from location service  java application to help outline testing 
  * note* not all methods may be tested... tests currently written should be considered a 
  * starting point 
  ***************************************************************************************/

  //test  public void createLocation(Location location)
  // it('should return an array', () => {
  //   const locale = service.getLocationData();
  //   expect(locale).toBeInstanceOf(Array);
  // });
  /*
  //test	public List<LocationDto> getAllLocations()
  it('should return an array', () => {
    const locale = service.getAllLocations();
    expect(locale).toBeInstanceOf(Array);
  });

  //test	public List<LocationDto> getLocationsByState(String state)
  it('should return an array', () => {
    const locale = service.getLocationsByState("FL");
    expect(locale).toBeInstanceOf(Array);
  });

  //test	public List<LocationDto> getLocationsByCity(String city)
  it('should return an array', () => {
    const locale = service.getLocationsByCity("Tampa");
    expect(locale).toBeInstanceOf(Array);
  });

  //test	public List<LocationDto> getLocationsByZipCode(String zipCode)
  it('should return an array', () => {
    const locale = service.getLocationsByZipCode("33620");
    expect(locale).toBeInstanceOf(Array);
  });

  //test	public LocationDto getLocation( int index)
  it('should return a single location', () => {
    const locale = service.getLocationById(1);
    expect(locale).toBeInstanceOf(LocationDetailsDto);
  });

  //test	public void updateState(int index,String state)
  // it('should return an array', () => {
  //   const locale = service.getLocationData();
  //   expect(locale).toBeInstanceOf(Array);
  // });

  //test	public void updateCity(int index, String city)
  // it('should return an array', () => {
  //   const locale = service.getLocationData();
  //   expect(locale).toBeInstanceOf(Array);
  // });

  //test	public void updateZipCode(int index, String zipCode)
  // it('should return an array', () => {
  //   const locale = service.getLocationData();
  //   expect(locale).toBeInstanceOf(Array);
  // });

  //test	public void deleteLocation(int index)
  // it('should return an array', () => {
  //   const locale = service.getLocationData();
  //   expect(locale).toBeInstanceOf(Array);
  // });

  //test	public void addBuilding(int index, BuildingDto buildingDto)
  // it('should return an array', () => {
  //   const locale = service.getLocationData();
  //   expect(locale).toBeInstanceOf(Array);
  // });

  //test	public void updateLocation(int index, Location location)
  // it('should return an array', () => {
  //   const locale = service.getLocationData();
  //   expect(locale).toBeInstanceOf(Array);
  // });

  // //test   RoomDto getRoom( int i );
  // it('should return an array', () => {
  //   const locale = service.getRoom(12);
  //   expect(locale).toBeInstanceOf(RoomDTO);
  // });

  // //test   List<RoomDto> getPhysicalMeetingRooms();
  // it('should return an array', () => {
  //   const locale = service.getPhysicalMeetingRooms();
  //   expect(locale).toBeInstanceOf(Array);
  // });

  // //test   List<RoomDto> getPhysicalTrainingRooms();
  // it('should return an array', () => {
  //   const locale = service.getPhysicalMeetingRooms();
  //   expect(locale).toBeInstanceOf(Array);
  // });

  // //test   List<RoomDto> getRemoteRooms();
  // it('should return an array', () => {
  //   const locale = service.getRemoteRooms();
  //   expect(locale).toBeInstanceOf(Array);
  // });

  // //test   List<RoomDto> getPhysicalRooms();
  // it('should return an array', () => {
  //   const locale = service.getPhysicalRooms();
  //   expect(locale).toBeInstanceOf(Array);
  // });

  // //test   List<RoomDto> getVirtualRooms();
  // it('should return an array', () => {
  //   const locale = service.getVirtualRooms();
  //   expect(locale).toBeInstanceOf(Array);
  // });

  // //test   List<RoomDto> getMeetingRooms();
  // it('should return an array', () => {
  //   const locale = service.getMeetingRooms();
  //   expect(locale).toBeInstanceOf(Array);
  // });

  // //test   List<RoomDto> getTrainingRooms();
  // it('should return an array', () => {
  //   const locale = service.getTrainingRooms();
  //   expect(locale).toBeInstanceOf(Array);
  // });

  //test   List<RoomDto> getAllRooms();
  it('should return an array', () => {
    const locale = service.getAllRooms();
    expect(locale).toBeInstanceOf(Array);
  });
  */

});
