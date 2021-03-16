export class RoomRequestDto {
  name: string;
  type: string;
  occupation: string;
  capacity: number;
  floorNumber: number;
  amenities: Set<string>;

  constructor(
    name: string,
    type: string,
    occupation: string,
    capacity: number,
    floorNumber: number,
    amenities: Set<string>
  ) {
    this.name = name;
    this.type = type;
    this.occupation = occupation;
    this.capacity = capacity;
    this.floorNumber = floorNumber;
    this.amenities = amenities;
  }
}
