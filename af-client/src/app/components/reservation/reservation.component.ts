import { Reservation } from '../../models/reservation';
import { ReservationService } from '../../services/reservation.service';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  @Input() selectedReservation: Reservation;
  response: string;
  roomId: number;
  buildingId: number;
  reservations: Reservation[];
  arr = [1,2,3];

  constructor(
    private reservationService: ReservationService,
    private router: Router
  ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        // Function you want to call here
        this.getAllReservations();
      }
    });
  }

  ngOnInit(): void {
    // this.getAllReservations();
  }

  getAllReservations(): void {
    this.reservationService
      .getAllReservations()
      .subscribe((reservations: Reservation[]) => {
        console.log('getting reservations');
        this.reservations = reservations;
      });
  }

  getAllReservationsByRoomId(roomId: number): void {
    this.reservationService
      .getAllReservationsByRoomId(roomId)
      .subscribe((reservations: Reservation[]) => {
        console.log('getting reservations by room id');
        this.reservations = reservations;
      });
  }

  add(newReservation: Reservation): void {
    console.log(newReservation);
    // buildingId = buildingId.trim();
    // if (!buildingId) {
    //   return;
    // }
    // newReservation.buildingId = buildingId;
    if (newReservation.startDate == '' || newReservation.endDate == '') {
      alert('Please enter the correct time-slot');
    } else {
      this.reservationService.addReservation(newReservation).subscribe(
        (res: Reservation) => {
          this.reservations.push(res);
        },
        (error) => {
          alert('This room already reserved for entered time-slot');
          console.log(error);
        }
      );
    }
  }

  getAllReservationsByBuildingId(buildingId: number): void {
    this.reservationService
      .getAllReservations()
      .subscribe((reservations: Reservation[]) => {
        console.log('getting reservations by building ' + this.buildingId);
        if (buildingId > 0 ) {
          this.reservations = reservations.filter(
            (res) => res.buildingId == this.buildingId
          );
        } else {
          this.getAllReservations();
        }
      });
  }

  getAlltrainingStationReservations(): void {
    this.reservationService
      .getTrainingStationReservations()
      .subscribe((reservations: Reservation[]) => {
        console.log('getting reservations');
        this.reservations = reservations;
      });
  }

  getAllMeetingRoomReservations(): void {
    this.reservationService
      .getAllReservations()
      .subscribe((reservations: Reservation[]) => {
        console.log('getting reservations');
        this.reservations = reservations.filter(
          (res) => res.roomType == 'PHYSICAL'
        );
      });
  }

  getAllTrainingStationReservationsByBuildingId(buildingId: number): void {
    this.reservationService
      .getTrainingStationReservationsByBuildingId(buildingId)
      .subscribe((reservations: Reservation[]) => {
        console.log('getting reservations by building id');
        this.reservations = reservations;
      });
  }
}
