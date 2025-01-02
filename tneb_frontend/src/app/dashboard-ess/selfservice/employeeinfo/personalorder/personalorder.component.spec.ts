import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalorderComponent } from './personalorder.component';

describe('PersonalorderComponent', () => {
  let component: PersonalorderComponent;
  let fixture: ComponentFixture<PersonalorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
