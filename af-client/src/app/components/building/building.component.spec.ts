import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BuildingComponent } from './building.component';
import { BuildingService } from '../../services/building.service';

describe('BuildingComponent', () => {
  let component: BuildingComponent;
  let fixture: ComponentFixture<BuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingComponent],
      imports: [HttpClientTestingModule],
      providers: [HttpClientTestingModule, BuildingService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
