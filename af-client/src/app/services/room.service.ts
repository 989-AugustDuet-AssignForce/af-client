import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RoomDetailsDto } from '../models/room-details-dto';
import { RoomDto } from '../models/room-dto';
import { RoomRequestDto } from '../models/room-request-dto';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private httpClient: HttpClient) {}

  getAllTrainingRooms(): Observable<RoomDto[]> {
    const url = environment.locationBackendUrl + '/rooms/training';
    return this.httpClient.get<RoomDto[]>(url);
  }

  getAllRooms(): Observable<RoomDto[]> {
    const url = environment.locationBackendUrl + '/rooms';
    return this.httpClient.get<RoomDto[]>(url);
  }

  getAllRemoteMeetingRooms(): Observable<RoomDto[]> {
    const url = environment.locationBackendUrl + '/rooms/remote/meeting';
    return this.httpClient.get<RoomDto[]>(url);
  }
  getAllPhysicalMeetingRooms(): Observable<RoomDto[]> {
    const url = environment.locationBackendUrl + '/rooms/physical/meeting';
    return this.httpClient.get<RoomDto[]>(url);
  }

  getAllRemoteTrainingRooms(): Observable<RoomDto[]> {
    const url = environment.locationBackendUrl + '/rooms/remote/training';
    return this.httpClient.get<RoomDto[]>(url);
  }

  getAllPhysicalTrainingRooms(): Observable<RoomDto[]> {
    const url = environment.locationBackendUrl + '/rooms/physical/training';
    return this.httpClient.get<RoomDto[]>(url);
  }

  getAllRemoteRooms(): Observable<RoomDto[]> {
    const url = environment.locationBackendUrl + '/rooms/remote';
    return this.httpClient.get<RoomDto[]>(url);
  }

  getAllPhysicalRooms(): Observable<RoomDto[]> {
    const url = environment.locationBackendUrl + '/rooms/physical';
    return this.httpClient.get<RoomDto[]>(url);
  }

  getRoomsByBuildingId(buildingId: number): Observable<RoomDto[]> {
    const url = environment.locationBackendUrl + `/rooms/${buildingId}`;
    return this.httpClient.get<RoomDto[]>(url);
  }

  getAllMeetingRooms(): Observable<RoomDto[]> {
    const url = environment.locationBackendUrl + '/rooms/meeting';
    return this.httpClient.get<RoomDto[]>(url);
  }

  deleteRoom(id: number): Observable<void> {
    const url = environment.locationBackendUrl + `/room/${id}`;
    return this.httpClient.delete<void>(url);
  }

  updateRoom(id: number, reqObj: RoomRequestDto): Observable<void> {
    const url = environment.locationBackendUrl + `/room/${id}`;
    return this.httpClient.put<void>(url, reqObj);
  }

  createRoom(
    reqObj: RoomRequestDto,
    buildingId: number
  ): Observable<RoomDetailsDto> {
    const url =
      environment.locationBackendUrl + `/buildings/${buildingId}/room`;
    return this.httpClient.put<RoomDetailsDto>(url, reqObj);
  }

  getRoom(id: number): Observable<RoomDetailsDto> {
    const url = environment.locationBackendUrl + `/room/${id}`;
    return this.httpClient.get<RoomDetailsDto>(url);
  }
}
