import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalcommunComponent } from './personalcommun.component';

describe('PersonalcommunComponent', () => {
  let component: PersonalcommunComponent;
  let fixture: ComponentFixture<PersonalcommunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalcommunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalcommunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
