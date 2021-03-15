import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { BacthDTO } from '../models/batch-dto';

@Injectable({
  providedIn: 'root'
})
export class CaliberService {

  constructor(private httpClient: HttpClient) { }

  getAllBatches() {
    const url = environment.caliberUrl + `batch`;

    return this.httpClient.get<BacthDTO[]>(url);
  }

  getAllCurrentBatches() {
    const url = environment.caliberUrl + `batch/current`;

    return this.httpClient.get<BacthDTO[]>(url);
  }

  getBatchById(id: number) {
    const url = environment.caliberUrl + `batch/${id}`;

    return this.httpClient.get<BacthDTO>(url);
  }
}
