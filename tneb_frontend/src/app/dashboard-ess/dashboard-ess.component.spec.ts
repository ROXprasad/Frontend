import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEssComponent } from './dashboard-ess.component';

describe('DashboardEssComponent', () => {
  let component: DashboardEssComponent;
  let fixture: ComponentFixture<DashboardEssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardEssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
