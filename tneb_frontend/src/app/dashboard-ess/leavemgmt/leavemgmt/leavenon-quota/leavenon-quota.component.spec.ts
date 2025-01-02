import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavenonQuotaComponent } from './leavenon-quota.component';

describe('LeavenonQuotaComponent', () => {
  let component: LeavenonQuotaComponent;
  let fixture: ComponentFixture<LeavenonQuotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavenonQuotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavenonQuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
