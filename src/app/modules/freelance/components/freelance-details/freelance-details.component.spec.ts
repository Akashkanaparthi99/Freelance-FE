import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceDetailsComponent } from './freelance-details.component';

describe('FreelanceDetailsComponent', () => {
  let component: FreelanceDetailsComponent;
  let fixture: ComponentFixture<FreelanceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelanceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
