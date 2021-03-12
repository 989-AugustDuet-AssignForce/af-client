import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Reservation } from '../models/reservation';

import { ReservationService } from './reservation.service';
import { Observable } from 'rxjs/internal/Observable';

describe('ReservationService', () => {
  let service: ReservationService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ReservationService);
  });

  //placeholder test delete or change but service should be tested for valid reservation times??
  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  //test if the service gives an array of reservations
  it('should be an array of all reservations', () => {
    const reserved = service.getAllReservations();
    let output;
    reserved.subscribe((response) => {
      output = response;
    });
    expect(output).toBeInstanceOf(Array);
  });

  //test if the information can be gotten by roomId
  it('should be an array of All Reservations By RoomId', () => {
    const reserved = service.getAllReservationsByRoomId(1402);
    let output;
    reserved.subscribe((response) => {
      output = response;
    });
    expect(output).toBeInstanceOf(Array);
  });

  //test if the stored information can be gotten by id
  it('should be a Reservation getReservationById', () => {
    const reserve = service.getReservationById(1234567);
    let output;
    reserve.subscribe((response) => {
      output = response;
    });
    expect(output).toBeInstanceOf(Reservation);
  });

  //test Reservation addReservation(Reservation reservation);
  it('should be an Reservation addReservation', () => {
    let reservation: Reservation = new Reservation(1, 1, 1, 1, "PHYSICAL", "Angular Unit Test", "02-02-2021 00:00", "02-02-2021 01:00");
    const reserve = service.addReservation(reservation);
    let output;
    reserve.subscribe((response) => {
      output = response;
    });
    expect(output).toBeInstanceOf(Reservation);
  });

  //test  Reservation updateReservation(Reservation reservation);
  it('should be a Reservation updateReservation', () => {
    let reservation: Reservation = new Reservation(1, 1, 1, 1, "PHYSICAL", "Angular Unit Test", "02-02-2021 00:00", "02-02-2021 01:00");
    const reserve = service.updateReservation(reservation);
    let output;
    reserve.subscribe((response) => {
      output = response;
    });
    expect(output).toBeInstanceOf(Reservation);

  });

  //test  void deleteReservation(Integer reservationId);
  it('should be void deleteReservation', () => {
    const reserve = service.deleteReservation(1);
    let output;
    reserve.subscribe((response) => {
      output = response;
    });
    expect(output).toBeInstanceOf(Reservation);
  });

  //test  void assignBatch(Reservation reservation, Integer batchId);
  it('Test Assign batch to reservation', async () => {
    let reservation: Reservation = new Reservation(4, 1, 1, 1, 'PHYSICAL', 'Angular Unit Test', '02-02-2021 00:00', '02-02-2021 01:00');
    const reserve = service.assignBatch(reservation, 101);
    let output;
    reserve.subscribe((response) => {
      output = response;
    });
    expect(output === '{"body":"Batch assigned successfully"}').toBeTruthy();
  });

  //test  List<Reservation> findTrainingStations();
  it('should be an array findTrainingStations', () => {
    const trainStations = service.getTrainingStationReservations();
    let output;
    trainStations.subscribe((response) => {
      output = response;
    });
    expect(output).toBeInstanceOf(Array);
  });

});
