import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomDetailsDto } from 'src/app/models/room-details-dto';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css'],
})
export class RoomDetailsComponent implements OnInit {
  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute
  ) {}

  details: RoomDetailsDto;

  ngOnInit(): void {
    this.getRoom();
  }

  async getRoom(): Promise<void> {
    const id = await this.route.snapshot.paramMap.get('roomId');
    console.log(id);
    this.roomService.getRoom(parseInt(id)).subscribe((room) => {
      this.details = room;
    });
  }
}
