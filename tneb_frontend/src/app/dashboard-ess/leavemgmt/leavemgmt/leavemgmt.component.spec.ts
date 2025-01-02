import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavemgmtComponent } from './leavemgmt.component';

describe('LeavemgmtComponent', () => {
  let component: LeavemgmtComponent;
  let fixture: ComponentFixture<LeavemgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavemgmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavemgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
