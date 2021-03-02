import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LocationService } from './location.service';

describe('LocationService', () => {
  let service: LocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      HttpClientTestingModule
    ]
  });
    service = TestBed.inject(LocationService);
  });

  it('should return an array', () => {
    const locale = service.getLocationData();
    expect(locale).toBeInstanceOf(Array);
  });
});
