import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LocationService } from './location.service';
import { LocationDto } from '../models/location-dto';

describe('LocationService', () => {
  let service: LocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(LocationService);
  });

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
    expect(locale).toBeInstanceOf(LocationDto);
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

  //test   RoomDto getRoom( int i );
  it('should return an array', () => {
    const locale = service.getRoom(12);
    expect(locale).toBeInstanceOf(RoomDTO);
  });

  //test   List<RoomDto> getPhysicalMeetingRooms();
  it('should return an array', () => {
    const locale = service.getPhysicalMeetingRooms();
    expect(locale).toBeInstanceOf(Array);
  });

  //test   List<RoomDto> getPhysicalTrainingRooms();
  it('should return an array', () => {
    const locale = service.getPhysicalMeetingRooms();
    expect(locale).toBeInstanceOf(Array);
  });

  //test   List<RoomDto> getRemoteRooms();
  it('should return an array', () => {
    const locale = service.getRemoteRooms();
    expect(locale).toBeInstanceOf(Array);
  });

  //test   List<RoomDto> getPhysicalRooms();
  it('should return an array', () => {
    const locale = service.getPhysicalRooms();
    expect(locale).toBeInstanceOf(Array);
  });

  //test   List<RoomDto> getVirtualRooms();
  it('should return an array', () => {
    const locale = service.getVirtualRooms();
    expect(locale).toBeInstanceOf(Array);
  });

  //test   List<RoomDto> getMeetingRooms();
  it('should return an array', () => {
    const locale = service.getMeetingRooms();
    expect(locale).toBeInstanceOf(Array);
  });

  //test   List<RoomDto> getTrainingRooms();
  it('should return an array', () => {
    const locale = service.getTrainingRooms();
    expect(locale).toBeInstanceOf(Array);
  });

  //test   List<RoomDto> getAllRooms();
  it('should return an array', () => {
    const locale = service.getAllRooms();
    expect(locale).toBeInstanceOf(Array);
  });


});
