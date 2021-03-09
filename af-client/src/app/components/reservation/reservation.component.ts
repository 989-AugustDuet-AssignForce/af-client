
import { Reservation } from '../../models/reservation';
import { ReservationService } from '../../services/reservation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservationList:Array<Reservation>;
  selectedReservation?:Reservation;

  constructor(private reservationService:ReservationService) {
    // this.reservationList = reservationService.getAllReservations();
   }

  ngOnInit(): void {
  }

  onSelectReservation(reservation: Reservation): void {
    this.selectedReservation = reservation;
  }
}
