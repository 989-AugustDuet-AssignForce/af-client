export class LocationDto {
    locationId: number
    state: string
    city: string
    zipCode: string
    numBuildings: number
    constructor(locationId: number, state: string,city: string, zipCode: string, numBuildings: number ) {
        this.city = city,
        this.locationId = locationId,
        this.numBuildings = numBuildings,
        this.state = state,
        this.zipCode = zipCode
    }
    
}