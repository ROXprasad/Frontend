import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationdetailsComponent } from './nominationdetails.component';

describe('NominationdetailsComponent', () => {
  let component: NominationdetailsComponent;
  let fixture: ComponentFixture<NominationdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominationdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NominationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
