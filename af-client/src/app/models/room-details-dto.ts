export class RoomDetailsDto {
  id: number;
  name: string;
  type: string;
  occupation: string;
  capacity: number;
  floorNumber: number;
  amenities: Set<string>;

  constructor(
    id: number,
    name: string,
    type: string,
    occupation: string,
    capacity: number,
    floorNumber: number,
    amenities: Set<string>
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.occupation = occupation;
    this.capacity = capacity;
    this.floorNumber = floorNumber;
    this.amenities = amenities;
  }
}
