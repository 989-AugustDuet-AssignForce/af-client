import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReservationComponent } from './reservation.component';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from '@angular/forms/';

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
