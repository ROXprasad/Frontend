import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalpfComponent } from './personalpf.component';

describe('PersonalpfComponent', () => {
  let component: PersonalpfComponent;
  let fixture: ComponentFixture<PersonalpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalpfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
