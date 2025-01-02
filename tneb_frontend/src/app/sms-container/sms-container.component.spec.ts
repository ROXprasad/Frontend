import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsContainerComponent } from './sms-container.component';

describe('SmsContainerComponent', () => {
  let component: SmsContainerComponent;
  let fixture: ComponentFixture<SmsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
