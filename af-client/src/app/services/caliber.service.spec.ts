import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CaliberService } from './caliber.service';

describe('CaliberService', () => {
  let service: CaliberService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CaliberService);
  });

  it('CaliberService should be created', () => {
    expect(service).toBeTruthy();
  });
});
