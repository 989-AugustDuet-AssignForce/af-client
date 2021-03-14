import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpResponse } from '@angular/common/http';
import { Reservation } from '../models/reservation';
import { environment } from '../../environments/environment';

import { ReservationService } from './reservation.service';


describe('ReservationService', () => {

  let service: ReservationService;
  let reservations: Reservation[];
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.inject(ReservationService);
    httpMock = TestBed.inject(HttpTestingController);

    reservations = [
      new Reservation( 1, 2, 1, 1, "PHYSICAL", "Angular Unit Test","01-17-2021 09:00", "01-17-2021 17:00", "MEETING", 1),
      new Reservation( 2, 1, 1, 2, "PHYSICAL", "Angular Unit Test", "01-18-2021 09:00", "01-18-2021 17:00", "TRAINING", 1),
      new Reservation( 3, 2, 1, 2, "VIRTUAL", "Angular Unit Test", "01-19-2021 09:00", "01-19-2021 17:00", "MEETING", 1),
      new Reservation( 4, 1, 1, 1, "PHYSICAL", "Angular Unit Test", "02-12-2021 09:00", "04-23-2021 17:00" ),
      new Reservation( 5, 2, 1, 3, "VIRTUAL", "Revature CEO", "03-19-2021 09:00", "03-19-2021 17:00", "TRAINING", 1)
    ];
  });

  //placeholder test delete or change but service should be tested for valid reservation times??
  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  //test if the stored information can be gotten by id
  it('should be a Reservation getReservationById 1', () => {
    const expected: Reservation = reservations[0];

    let request = service.getReservationById(1)
      .subscribe((response: Reservation) => {
        expect(response).toEqual(expected);
      });

    const url = environment.reservartionBackendUrl + `1`;
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(expected);
    httpMock.verify();
    request.unsubscribe();
  });

  //test if the service gives an array of reservations
  it('should be an array of all reservations', () => {
    let request = service.getAllReservations()
      .subscribe((response: Reservation[]) => {
        expect(response).toEqual(reservations);
      });

    const url = environment.reservartionBackendUrl;
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(reservations);
    httpMock.verify();
    request.unsubscribe();
  });

  //test if the information can be gotten by roomId
  it('should be an array of All Reservations By RoomId 1', () => {
    const expected: Reservation[] = [
      Reservation[0],
      Reservation[3]
    ];

    let request = service.getAllReservationsByRoomId(1)
      .subscribe((response: Reservation[]) => {
        expect(response).toEqual(expected);
      });

    const url = environment.reservartionBackendUrl + `rooms/1`;
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(expected);
    httpMock.verify();
    request.unsubscribe();
  });

  

  //test Reservation addReservation(Reservation reservation);
  it('should be an Reservation addReservation', () => {
    const expected: Reservation = new Reservation(8, 1, 1, 1, "PHYSICAL", "Angular Unit Test", "02-02-2021 00:00", "02-02-2021 01:00");

    let request = service.addReservation(expected)
      .subscribe((response: Reservation) => {
        expect(response).toEqual(expected);
      });

    const url = environment.reservartionBackendUrl;
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(expected);
    httpMock.verify();
    request.unsubscribe();
  });

  //test  Reservation updateReservation(Reservation reservation);
  it('should be a Reservation updateReservation', () => {
    let expected: Reservation = new Reservation(1, 1, 1, 1, "PHYSICAL", "Angular Unit Test", "02-02-2021 00:00", "02-02-2021 01:00");

    let request = service.updateReservation(expected)
      .subscribe((response: Reservation) => {
        expect(response).toEqual(expected);
      });

    const url = environment.reservartionBackendUrl;
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(expected);
    httpMock.verify();
    request.unsubscribe();
  });

  /* FIXME: status is null
  //test  void deleteReservation(Integer reservationId);
  it('should be void deleteReservation 1', () => {

    let request = service.deleteReservation(1)
      .subscribe((response: HttpResponse<any>) => {
        expect(response.status).toEqual(200);
      });

    const url = environment.reservartionBackendUrl + '1';
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(null);
    httpMock.verify();
    request.unsubscribe();
  });
  */

  //test  void assignBatch(Reservation reservation, Integer batchId);
  it('Test Assign batch to reservation', async () => {
    const expected = {
      body: "Batch assigned successfully"
    };

    let request = service.assignBatch( reservations[3], 55 )
      .subscribe((response: any) => {
        expect(response).toEqual(expected);
      });

    const url = environment.reservartionBackendUrl + `4/55`;
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(expected);
    httpMock.verify();
    request.unsubscribe();
  });

  //test  List<Reservation> findTrainingStations();
  it('should be an array findTrainingStations', () => {
    const expected: Reservation[] = [
      Reservation[1],
      Reservation[4]
    ];

    let request = service.getTrainingStationReservations()
      .subscribe((response: Reservation[]) => {
        expect(response).toEqual(expected);
      });

    const url = environment.reservartionBackendUrl + `trainingstations`;
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(expected);
    httpMock.verify();
    request.unsubscribe();
  });

  //test getTrainingStationReservationsByBuildingId;
  it('should be an array getTrainingStationReservationsByBuildingId 1', () => {
    const expected: Reservation[] = [
      Reservation[1]
    ];

    let request = service.getTrainingStationReservationsByBuildingId(1)
      .subscribe((response: Reservation[]) => {
        expect(response).toEqual(expected);
      });

    const url = environment.reservartionBackendUrl + `trainingstations/building/1`;
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(expected);
    httpMock.verify();
    request.unsubscribe();
  });

  //test getAllAvailableMeetingRooms;
  /* TODO add after RoomDTO added
  it('should be a Reservation array getAllAvailableMeetingRooms', () => {
    const expected: RoomDTO[] = [
      
    ];
    const startDate: string = "";
    const endDate: string = "";

    let request = service.getAllAvailableMeetingRooms(1, startDate, endDate)
      .subscribe((response: RoomDTO[]) => {
        expect(response).toEqual(expected);
      });

    const url = environment.reservartionBackendUrl + `1/meetingrooms`;

    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(expected);
    httpMock.verify();
    request.unsubscribe();
  });
  */
});
