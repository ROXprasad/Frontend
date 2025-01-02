import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalidsComponent } from './personalids.component';

describe('PersonalidsComponent', () => {
  let component: PersonalidsComponent;
  let fixture: ComponentFixture<PersonalidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
