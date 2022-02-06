import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1eComponent } from './c1e.component';

describe('C1eComponent', () => {
  let component: C1eComponent;
  let fixture: ComponentFixture<C1eComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1eComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
