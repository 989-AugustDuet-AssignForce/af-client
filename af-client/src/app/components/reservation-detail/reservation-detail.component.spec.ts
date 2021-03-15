import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { ReservationDetailComponent } from './reservation-detail.component';

describe('ReservationDetailComponent', () => {
  let component: ReservationDetailComponent;
  let fixture: ComponentFixture<ReservationDetailComponent>;

  const fakeActivatedRoute = {
    snapshot: {
      queryParams: {
        returnUrl: '/'
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationDetailComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers:
        [
          {
            provide: ActivatedRoute,
            useFactory: () => fakeActivatedRoute
          }
        ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('ReservationDetailComponent should be created', () => {
    expect(component).toBeTruthy();
  });
});
