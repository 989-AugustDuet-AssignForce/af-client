import { Reservation } from '../../models/reservation';
import { ReservationService } from '../../services/reservation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  private id: number;
  private batchId?: number;
  private buildingId: number;
  private locationId: number;
  private roomId: number;
  private roomType: string;
  private reserver: string;
  private startDate: string;
  private endDate: string;

  // constructor(reservation: Reservation) {
  //   this.id = reservation.id;
  //   this.batchId = reservation.batchId;
  //   this.buildingId = reservation.buildingId;
  //   this.locationId = reservation.locationId;
  //   this.roomId = reservation.roomId;
  //   this.roomType = reservation.roomType;
  //   this.reserver = reservation.reserver;
  //   this.startDate = reservation.startDate;
  //   this.endDate = reservation.endDate;
  // }

  ngOnInit(): void {
  }

  // onSelectReservation(reservation: Reservation): void {
  //   this.selectedReservation = reservation;
  // }
}
