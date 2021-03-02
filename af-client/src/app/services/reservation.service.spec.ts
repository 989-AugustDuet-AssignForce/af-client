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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be an array', () => {
    const reserved = service.getAllReservations();
    expect(reserved).toBeInstanceOf(Array);
  });

  it('should change the array', () => {
    const reserved = service.getReservationByRoomId(1402);
    expect(reserved).toBeInstanceOf(Array);
  });

  it('shou', () => {

  });
});
