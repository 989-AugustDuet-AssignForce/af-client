import { BuildingDto } from './building-dto';
export class LocationDetailsDto {
    id: number;
    city: string;
    state: string;
    zipCode: string;
    buildings: BuildingDto[];
    constructor( 
        id: number, 
        city: string, 
        state: string, 
        zipCode: string, 
        buildings?: BuildingDto[]
    ) {}
}