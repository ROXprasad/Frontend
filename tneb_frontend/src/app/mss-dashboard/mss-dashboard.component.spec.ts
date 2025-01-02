import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MssDashboardComponent } from './mss-dashboard.component';

describe('MssDashboardComponent', () => {
  let component: MssDashboardComponent;
  let fixture: ComponentFixture<MssDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MssDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MssDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
