import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private httpClient: HttpClient) { }
  
  getReservationById(reservationId: number) {
    const url = environment.reservartionBackendUrl + `${reservationId}`;

    return this.httpClient.get<Reservation>(url);
  }

  getAllReservations() {
    const url = environment.reservartionBackendUrl;

    return this.httpClient.get<Reservation[]>(url);
  }

  getAllReservationsByRoomId(roomId: number) {
    const url = environment.reservartionBackendUrl + `rooms/${roomId}`;

    return this.httpClient.get<Reservation[]>(url);
  }

  addReservation(reservation: Reservation) {
    const url = environment.reservartionBackendUrl;

    return this.httpClient.post<Reservation>(url, reservation);
  }

  updateReservation(reservation: Reservation) {
    const url = environment.reservartionBackendUrl;

    return this.httpClient.put<Reservation>(url, reservation);
  }

  deleteReservation(reservationId: number) {
    const url = environment.reservartionBackendUrl + `${reservationId}`;
    return this.httpClient.delete(url);
  }

  assignBatch( reservation: Reservation, batchId: number ) {
    const url = environment.reservartionBackendUrl + `${reservation.reservationId}/${batchId}`;
    return this.httpClient.put<HttpResponse<any>>(url, null);
  }

  getTrainingStationReservations() {
    const url = environment.reservartionBackendUrl + `trainingstations`;

    return this.httpClient.get<Reservation[]>(url);
  }

  getTrainingStationReservationsByBuildingId(buildingId: number) {
    const url = environment.reservartionBackendUrl + `trainingstations/building/${buildingId}`;

    return this.httpClient.get<Reservation[]>(url);
  }

  // TODO change this to room DTO
  getAllAvailableMeetingRooms(buildingId: number, startDate: string, endDate: string) {
    const url = environment.reservartionBackendUrl + `${buildingId}/meetingrooms`;
    const requestBody = {
      startDate: startDate,
      endDate: endDate
    };

    return this.httpClient.get<Reservation[]>(url, {
      params: requestBody
    });
  }
}
