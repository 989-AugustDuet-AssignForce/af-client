import { Injectable } from '@angular/core';
<<<<<<< HEAD

import { Reservation } from '../models/reservation';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

=======
import { Reservation } from '../models/reservation';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
>>>>>>> c16da034cf3b807baba42cc4ee06f99f22a2708c

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpClient) { }

  getReservationById( reservationId: number ) { }

  getAllReservations() { }

  getAllReservationsByRoomId( roomId: number) { }

  addReservation( reservation: Reservation ) { }

  updateReservation( reservation: Reservation ) { }

  deleteReservation( reservationId: number) { }

  async assignBatch( reservation: Reservation, batchId: number ) {
    const url = environment.reservartionBackendUrl + `api/reservations/${reservation.id}/${batchId}`;

    let response = await this.httpClient.put( url, null, {
      observe: 'response'
    }).toPromise().catch( (err) => {

    });

    // display response?
  }

  getTrainingStationReservations() {}
}
