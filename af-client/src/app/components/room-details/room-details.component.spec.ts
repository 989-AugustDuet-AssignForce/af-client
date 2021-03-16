import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RoomDetailsComponent } from './room-details.component';
import { RoomService } from '../../services/room.service';
import { ActivatedRoute } from '@angular/router';

describe('RoomDetailsComponent', () => {
  let component: RoomDetailsComponent;
  let fixture: ComponentFixture<RoomDetailsComponent>;

  const fakeActivatedRoute = {
    snapshot: {
      queryParams: {
        returnUrl: '/',
        roomId: 1,
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomDetailsComponent],
      imports: [HttpClientTestingModule],
      providers: [
        HttpClientTestingModule,
        RoomService,
        {
          provide: ActivatedRoute,
          useFactory: () => fakeActivatedRoute,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
