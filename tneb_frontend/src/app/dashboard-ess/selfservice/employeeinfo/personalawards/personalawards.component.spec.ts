import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalawardsComponent } from './personalawards.component';

describe('PersonalawardsComponent', () => {
  let component: PersonalawardsComponent;
  let fixture: ComponentFixture<PersonalawardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalawardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalawardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
