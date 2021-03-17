export class LocationRequestDto {
    state: string;
    city: string;
    zipCode: string;
    constructor(
        state: string,
        city: string,
        zipCode: string
    )
    {
        this.state = state;
        this.city = city;
        this.zipCode = zipCode;

    }
}