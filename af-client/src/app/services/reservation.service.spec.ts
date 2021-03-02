import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ReservationService } from './reservation.service';



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
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //test if the service gives an array of reservations
  it('should be an array', () => {
    const reserved = service.getAllReservations();
    expect(reserved).toBeInstanceOf(Array);
  });

  //test if the information can be gotten by roomId
  it('should be an array', () => {
    const reserved = service.getReservationByRoomId(1402);
    expect(reserved).toBeInstanceOf(Array);
  });

  //test if the stored information can be gotten by id
  it('should be an object', () => {
    const reserve = service.getReservationById(1234567);
    expect(reserve).toBeInstanceOf(Reservation);
  });

  //test if the object could be stored in the service??
  it('should be an array', () => {
    const rooms = service.getAllAvailableRoomsByType(12,"PHYSICAL");
    expect(rooms).toBeInstanceOf(Array);
  });

  //test Reservation addReservation(Reservation reservation);
  it('should be an object', () => {
    Reservation r = new Reservation();
    const reserve =service.addReservation(r);
    expect(reserve).toBeInstanceOf(Reservation);
  });  

  //test  Reservation updateReservation(Reservation reservation);
  it('should be an object', () => {
    Reservation r = new Reservation(); // is this needed?
    const reserve =service.updateReservation(r);
    expect(reserve).toBeInstanceOf(Reservation);

  });
  
  //test  void deleteReservation(Integer reservationId);
  // it('should be an object', () => {

  // });
  
  //test  void assignBatch(Integer reservationId, Integer batchId);
  // it('should be an object', () => {

  // });
  
  //test  boolean isValidReservation(Reservation reservation);
  it('should be an object', () => {
    Reservation res = new Reservation();
    const result = service.isValidReservation(res);
    expect(result).toBeTruthy();
  });
  
  //test  List<Reservation> findTrainingStations();
  it('should be an array', () => {
    const trainStations = service.findTrainingStations();
    expect(trainStations).toBeInstanceOf(Array);
  });

});
