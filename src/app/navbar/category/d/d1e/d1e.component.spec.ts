import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D1eComponent } from './d1e.component';

describe('D1eComponent', () => {
  let component: D1eComponent;
  let fixture: ComponentFixture<D1eComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D1eComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D1eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
