import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { BuildingRequestDto } from '../models/building-request-dto';
import { BuildingDto } from '../models/building-dto';



@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor(private httpClient: HttpClient) { }

  //getBuildings(): Observable<Array<Building{}

  //getBuildingsByCity( city: String) {

  //}
  //getBuildingsByStreetAddress(streetAddress: String){

 // }
  //getBuilding(index: number){

  //}
  getBuildings(): Observable<BuildingDto[]>{
    let url: string  = environment.locationBackendUrl+"/buildings";
    return this.httpClient.get<BuildingDto[]>(url);
  }

  getBuildingsByLocationId(id: number): Observable<BuildingDto[]>{
    let url: string  = environment.locationBackendUrl+`/buildings/locations/${id}/buildings`;
    return this.httpClient.get<BuildingDto[]>(url);
  }

  updateBuildingCity(index: number, city: String): Observable<Object>{

    let url: string  = environment.locationBackendUrl+"/buildings/"+index+"/city/"+city+"/";
    return this.httpClient.patch(url, "");
  }
  updateBuildingZipCode(index: number, zipCode: String): Observable<Object>{
    let url: string  = environment.locationBackendUrl+"/buildings/zipCode/" + index +"/"+zipCode+"/";
    return this.httpClient.patch(url, "");
  }
  updateNumberOfFloors(index: number, floorCount: number):  Observable<Object>{
    let url: string  = environment.locationBackendUrl+"/buildings/"+index+"/floors/"+floorCount+"/";
    return this.httpClient.patch(url, "");
  }
  updateBuilding(index: number, dto :BuildingRequestDto): Observable<Object>{
    let url: string  = environment.locationBackendUrl+"/buildings/" + index +"/";
    return this.httpClient.patch(url, dto);
  }
  addBuilding(index:number, dto: BuildingRequestDto): Observable<Object>{
    let url: string = environment.locationBackendUrl+"/buildings/locations/"+index+"/buildings/";
    return this.httpClient.post(url, dto);
  }
  deleteBuilding(locationIndex: number, buildingIndex: number){
    let url: string = environment.locationBackendUrl+"/buildings/"+buildingIndex+"/"+locationIndex+"/"
    return this.httpClient.delete(url);
  }
}
