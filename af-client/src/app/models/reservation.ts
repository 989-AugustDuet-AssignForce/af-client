export class Reservation {
    constructor( public id: number, batchId: number, buildingId: number, locationId: number, roomId: number, roomType: string, reserver: string, startDate: string, endDate: string ) {}
}
