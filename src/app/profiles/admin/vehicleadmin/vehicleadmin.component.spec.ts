import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleadminComponent } from './vehicleadmin.component';

describe('VehicleadminComponent', () => {
  let component: VehicleadminComponent;
  let fixture: ComponentFixture<VehicleadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
