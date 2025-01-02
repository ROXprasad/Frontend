import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavequotaComponent } from './leavequota.component';

describe('LeavequotaComponent', () => {
  let component: LeavequotaComponent;
  let fixture: ComponentFixture<LeavequotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavequotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavequotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
