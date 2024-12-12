import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnrollmentStatusPage } from './enrollment-status.page';

describe('EnrollmentStatusPage', () => {
  let component: EnrollmentStatusPage;
  let fixture: ComponentFixture<EnrollmentStatusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
