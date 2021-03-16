import { HttpResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { POINT_CONVERSION_UNCOMPRESSED } from 'node:constants';
import { RoomRequestDto } from '../models/room-request-dto';

import { RoomService } from './room.service';

describe('RoomService', () => {
  let service: RoomService;

  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RoomService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should provide an array of all rooms', () => {
    const roomsObservable = service.getAllRooms();
    let response;

    roomsObservable.subscribe((res) => {
      response = res;
    });

    expect(response).toBeInstanceOf(Array);
  });

  it('should provide a list of all remote training rooms', () => {
    const trainingRoomsObservable = service.getAllRemoteTrainingRooms();
    let response;

    trainingRoomsObservable.subscribe((res) => {
      response = res;
    });
    expect(response).toBeInstanceOf(Array);
  });

  it('should provide a list of all remote meeting rooms', () => {
    const meetingRoomsObservable = service.getAllRemoteMeetingRooms();
    let response;

    meetingRoomsObservable.subscribe((res) => {
      response = res;
    });
    expect(response).toBeInstanceOf(Array);
  });

  it('should provide a array of all physical meeting rooms', () => {
    const physicalMeetingRoomsObservable = service.getAllPhysicalMeetingRooms();
    let response;

    physicalMeetingRoomsObservable.subscribe((res) => {
      response = res;
    });
  });

  it('should provide an array of all physical training rooms', () => {
    const physicalTrainingRoomsObservable = service.getAllPhysicalTrainingRooms();
    let response;

    physicalTrainingRoomsObservable.subscribe((res) => {
      response = res;
    });

    expect(response).toBeInstanceOf(Array);
  });

  it('should provide an array of all training rooms', () => {
    const allTrainingRoomsObservable = service.getTrainingRooms();
    let response;
    allTrainingRoomsObservable.subscribe((res) => {
      response = res;
    });
  });

  it('should update an existing room', () => {
    const expected = new HttpResponse({ body: '', status: 204 });
    const updateRoomObservable = service.updateRoom(
      1,
      new RoomRequestDto(
        'Test Room A',
        'REMOTE',
        'MEETING',
        20,
        2,
        new Set(['Projector', 'STREAMING'])
      )
    );

    // const request = updateRoomObservable.subscribe(
    //   (response: HttpResponse<any>) => {
    //     expect(response).toEqual(expected);
    //   }
    // );
    // request.unsubscribe();
  });
});
