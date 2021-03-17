export class LocationDto {
    id: number;
    city: string;
    state: string;
    zipCode: string;
    numBuildings: number;

    constructor( 
        id: number, 
        city: string, 
        state: string, 
        zipCode: string, 
        numBuildings?: number 
    ) {
        this.id = id;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.numBuildings = numBuildings;
    }
}