import { Reservation } from '../../models/reservation';
import { ReservationService } from '../../services/reservation.service';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CaliberService } from 'src/app/services/caliber.service';
import { BacthDTO } from 'src/app/models/batch-dto';
import { RoomService } from 'src/app/services/room.service';
import { RoomDto } from 'src/app/models/room-dto';
import { BuildingService } from 'src/app/services/building.service';
import { BuildingDto } from 'src/app/models/building-dto';
import { LocationService } from 'src/app/services/location.service';
import { LocationDto } from 'src/app/models/location-dto';

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
  arr = [1, 2, 3];
  rooms = [];
  buildings = [];
  locations = [];
  batches: BacthDTO[];
  selectedLocationId: number;
  selectedBuildingId: number;

  constructor(
    private reservationService: ReservationService,
    private router: Router,
    private caliberService: CaliberService,
    private roomService: RoomService,
    private buildingService: BuildingService,
    private locationService: LocationService) {

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        // Function you want to call here
        this.getAllReservations();
        this.getLocations();
      }
    });
  }

  ngOnInit(): void {
    this.getBatches();
  }

  getAllReservations(): void {
    this.reservationService
      .getAllReservations()
      .subscribe((reservations: Reservation[]) => {
        console.log('getting reservations');
        this.reservations = reservations;
      });
  }

  selectBuilding(event: any): void {
    this.selectedBuildingId = event.target.value;
    this.getRooms(event.target.value)
  }
  getRooms(id: number): void {
    this.roomService.getRoomsByBuildingId(id).subscribe(
      (roomsList: RoomDto[]) => {
        let temp = [];
        roomsList.forEach(room => temp.push(room.id));
        this.rooms = temp;
        }
    )
  }
  selectLocation(event: any) {
      this.selectedLocationId = event.target.value;
      this.getBuildings();
  }
  getBuildings(): void {
    this.buildingService.getBuildingsByLocationId(this.selectedLocationId).subscribe(
      (buildings: BuildingDto[]) => {
        let temp = [];
        buildings.forEach(building => temp.push(building.id))
        this.buildings = temp;
      }
    )
  }

  getLocations(): void {
    this.locationService.getAllLocations().subscribe(
      (locations: LocationDto[]) => {
        locations.forEach(location => this.locations.push(location.id))
      }
    )
  }

  getAllReservationsByRoomId(roomId: number): void {
    this.buildingId = null;
    this.reservationService
      .getAllReservationsByRoomId(roomId)
      .subscribe((reservations: Reservation[]) => {
        console.log('getting reservations by room id');
        this.reservations = reservations;
      });
  }

  add(newReservation: Reservation): void {
    console.log(newReservation);
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
    this.roomId = null;
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

  getBatches(): void {
    this.caliberService.getAllBatches().subscribe((batches) => {
      this.batches = batches;
    });
  }
}
