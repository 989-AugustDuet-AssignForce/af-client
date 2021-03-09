
// import { Reservation } from '../../models/reservation';
import { ReservationService } from '../../services/reservation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  

  constructor(private reservation:Reservation) {
    this.id = reservation.id;
   }

  ngOnInit(): void {
  }

  // onSelectReservation(reservation: Reservation): void {
  //   this.selectedReservation = reservation;
  // }
}
