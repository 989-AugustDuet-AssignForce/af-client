import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CaliberService } from './caliber.service';
import { BacthDTO } from '../models/batch-dto';
import { environment } from '../../environments/environment';

describe('CaliberService', () => {
  let service: CaliberService;
  let httpMock: HttpTestingController;
  let batches: BacthDTO[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.inject(CaliberService);
    httpMock = TestBed.inject(HttpTestingController);

    batches = [
      { id: 55, bacthId: "TR-113", name: "Mock Batch 55", startDate: "2021-02-12", endDate: "2021-04-23" },
      { id: 44, bacthId: "TR-1086", name: "Mock Batch 44", startDate: "2020-03-16", endDate: "2021-05-29" },
      { id: 57, bacthId: "TR-1117", name: "Mock Batch 57", startDate: "2021-02-26", endDate: "2021-05-07" },
      { id: 36, bacthId: "TR-1067", name: "Mock Batch 36", startDate: "2020-08-12", endDate: "2020-10-21"}
    ];
  });

  it('CaliberService should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Test Get all Batches', () => {
    const expected: BacthDTO[] = batches;

    let request = service.getAllBatches()
      .subscribe((response: BacthDTO[]) => {
        expect(response).toEqual(expected);
      });

    const url = environment.caliberUrl + 'batch';
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(expected);
    httpMock.verify();
    request.unsubscribe();
  });

  it('Test Get all Current Batches', () => {
    const expected: BacthDTO[] = [ batches[0], batches[1], batches[2] ];

    let request = service.getAllCurrentBatches()
      .subscribe((response: BacthDTO[]) => {
        expect(response).toEqual(expected);
      });

    const url = environment.caliberUrl + 'batch/current';
    const mockRequest = httpMock.expectOne(url);

    expect(mockRequest.cancelled).toBeFalsy();
    mockRequest.flush(expected);
    httpMock.verify();
    request.unsubscribe();
  });

});
