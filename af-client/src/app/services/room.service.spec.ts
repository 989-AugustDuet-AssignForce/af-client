import { HttpResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { RoomDetailsDto } from '../models/room-details-dto';
import { RoomDto } from '../models/room-dto';
import { RoomRequestDto } from '../models/room-request-dto';

import { RoomService } from './room.service';

describe('RoomService', () => {
  let service: RoomService;

  let httpMock: HttpTestingController;
  let rooms: RoomDto[];
  let roomDetails: RoomDetailsDto[];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RoomService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  rooms = [
    new RoomDto(1, 'PHYSICAL', 'MEETING'),
    new RoomDto(2, 'REMOTE', 'MEETING'),
    new RoomDto(3, 'VIRTUAL', 'MEETING'),
    new RoomDto(4, 'PHYSICAL', 'TRAINING'),
    new RoomDto(5, 'REMOTE', 'TRAINING'),
    new RoomDto(6, 'VIRTUAL', 'TRAINING'),
  ];
  roomDetails = [
    new RoomDetailsDto(
      1,
      'Test Room 1',
      'PHYSICAL',
      'MEETING',
      10,
      2,
      new Set()
    ),
    new RoomDetailsDto(2, 'Test Room 2', 'REMOTE', 'MEETING', 10, 2, new Set()),
    new RoomDetailsDto(
      3,
      'Test Room 3',
      'VIRTUAL',
      'MEETING',
      10,
      2,
      new Set()
    ),
    new RoomDetailsDto(
      4,
      'Test Room 4',
      'PHYSICAL',
      'TRAINING',
      10,
      2,
      new Set()
    ),
    new RoomDetailsDto(
      5,
      'Test Room 5',
      'REMOTE',
      'TRAINING',
      10,
      2,
      new Set()
    ),
    new RoomDetailsDto(
      6,
      'Test Room 6',
      'VIRTUAL',
      'TRAINING',
      10,
      2,
      new Set()
    ),
  ];

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should provide an array of all rooms', () => {
    const expected: RoomDto[] = roomDetails;

    const request = service.getAllRooms().subscribe((response: RoomDto[]) => {
      expect(response).toEqual(expected);
    });

    const url = environment.locationBackendUrl + `/rooms`;
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(expected);
    httpMock.verify();
    request.unsubscribe();
  });

  it('should provide a list of all remote training rooms', () => {
    const expected: RoomDto[] = rooms.filter(
      (room) => room.occupation === 'REMOTE' && room.type === 'TRAINING'
    );
    const request = service
      .getAllRemoteTrainingRooms()
      .subscribe((response: RoomDto[]) => {
        expect(response).toEqual(expected);
      });
    const url = environment.locationBackendUrl + `/rooms/remote/training`;
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(expected);
    httpMock.verify();
    request.unsubscribe();
  });

  it('should provide a list of all remote meeting rooms', () => {
    const expected: RoomDto[] = rooms.filter(
      (room) => room.occupation === 'REMOTE' && room.type === 'MEETING'
    );
    const request = service
      .getAllRemoteMeetingRooms()
      .subscribe((response: RoomDto[]) => {
        expect(response).toEqual(expected);
      });
    const url = environment.locationBackendUrl + `/rooms/remote/meeting`;
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(expected);
    httpMock.verify();
    request.unsubscribe();
  });

  it('should provide a array of all physical meeting rooms', () => {
    const expected: RoomDto[] = rooms.filter(
      (room) => room.occupation === 'PHYSICAL' && room.type === 'MEETING'
    );
    const request = service
      .getAllPhysicalMeetingRooms()
      .subscribe((response: RoomDto[]) => {
        expect(response).toEqual(expected);
      });
    const url = environment.locationBackendUrl + `/rooms/physical/meeting`;
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(expected);
    httpMock.verify();
    request.unsubscribe();
  });

  it('should provide an array of all physical training rooms', () => {
    const expected: RoomDto[] = rooms.filter(
      (room) => room.occupation === 'PHYSICAL' && room.type === 'TRAINING'
    );
    const request = service
      .getAllPhysicalTrainingRooms()
      .subscribe((response: RoomDto[]) => {
        expect(response).toEqual(expected);
      });
    const url = environment.locationBackendUrl + `/rooms/physical/training`;
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(expected);
    httpMock.verify();
    request.unsubscribe();
  });

  it('should provide an array of all training rooms', () => {
    const expected: RoomDto[] = rooms.filter(
      (room) => room.occupation === 'TRAINING'
    );
    const request = service
      .getAllTrainingRooms()
      .subscribe((response: RoomDto[]) => {
        expect(response).toEqual(expected);
      });
    const url = environment.locationBackendUrl + `/rooms/training`;
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(expected);
    httpMock.verify();
    request.unsubscribe();
  });
});
