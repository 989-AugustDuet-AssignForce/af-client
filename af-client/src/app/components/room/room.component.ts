import { Component, OnInit } from '@angular/core';
import { RoomDto } from 'src/app/models/room-dto';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rooms: RoomDto[];
  arrBuildingIds = [1,2,3,4,5];
  available: boolean;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    
  }

  viewAvaialableMeetingRooms(data): void{
    if (data.startDate == '' || data.endDate == '' || data.buildingId == ''){
      alert('Please enter BuildingId , Start-time and End-time');
    } else {
      this.reservationService
      .getAllAvailableMeetingRooms(data.buildingId,data.startDate,data.endDate)
      .subscribe((returnRooms: RoomDto[]) => {
        if(returnRooms && returnRooms.length > 0){
          console.log('getting rooms');
          this.available = true;
          this.rooms = returnRooms;
        }else{
          this.available = false;
          alert('Meeting rooms not avaialable for this time!');
        
        }
        
      });

    }
  }

}
