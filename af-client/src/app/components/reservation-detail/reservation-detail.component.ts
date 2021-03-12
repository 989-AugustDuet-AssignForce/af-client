import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { CaliberService } from '../../services/caliber.service';
import { BacthDTO } from '../../models/batch-dto';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})
export class ReservationDetailComponent implements OnInit {
  reservation: Reservation;
  batches: BacthDTO[];
  batchError: string;

  constructor(private reservationService: ReservationService,
    private route: ActivatedRoute,
    private caliberService: CaliberService ) {

  }

  ngOnInit(): void {
    this.getReservation();
  }
  
  async getReservation():Promise<void> {
    const id = await this.route.snapshot.paramMap.get('reservationId');
    console.log(id)
      this.reservationService.getReservationById(parseInt(id))
        .subscribe(reservation => this.reservation = reservation);
  }

  delete(): void{
    //const id = await this.route.snapshot.paramMap.get('reservationId');
    let res: any ;
    this.reservationService.deleteReservation(this.reservation.reservationId)
    .subscribe();
    console.log(res);
  }

  async update(): Promise<void> {
    this.reservationService.updateReservation(this.reservation)
    .subscribe(resertion => this.reservation = resertion);
  }

  getBatches(): void {
    this.caliberService.getAllCurrentBatches().subscribe((batches) => {
      this.batches = batches;
    });
  }

  assignBatch(id: number) {
    this.reservationService.assignBatch(this.reservation, id).subscribe(
      (response) => {
        this.getReservation();
        this.batches = undefined;
        this.batchError = undefined;
      },
      (error) => {
        this.batchError = error.error;
        console.log(this.batchError)
      });
  }

}
