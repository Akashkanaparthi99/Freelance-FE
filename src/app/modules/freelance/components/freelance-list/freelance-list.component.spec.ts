import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceListComponent } from './freelance-list.component';

describe('FreelanceListComponent', () => {
  let component: FreelanceListComponent;
  let fixture: ComponentFixture<FreelanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelanceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
