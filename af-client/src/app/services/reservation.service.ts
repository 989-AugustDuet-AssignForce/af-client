import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Reservation } from 'src/app/models/reservation';
=======
import { Reservation } from '../models/reservation';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
>>>>>>> main

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
