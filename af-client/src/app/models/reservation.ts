export class Reservation {
  id: number;
  batchId?: number;
  buildingId: number;
  locationId: number;
  roomId: number;
  roomType: string;
  reserver: string;
  startDate: string;
  endDate: string;

  constructor(id: number,
    buildingId: number,
    locationId: number,
    roomId: number,
    roomType: string,
    reserver: string,
    startDate: string,
    endDate: string,
    batchId?: number) {

    this.id = id;
    this.batchId = batchId;
    this.buildingId = buildingId;
    this.locationId = locationId;
    this.roomId = roomId;
    this.roomType = roomType;
    this.reserver = reserver;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
