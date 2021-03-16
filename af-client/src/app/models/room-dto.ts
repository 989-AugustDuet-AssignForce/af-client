export class RoomDto {
  id: number;
  type: string;
  occupation: string;

  constructor(id: number, type: string, occupation: string) {
    this.id = id;
    this.type = type;
    this.occupation = occupation;
  }
}
