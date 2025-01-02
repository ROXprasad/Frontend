import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalotherstatutoryComponent } from './personalotherstatutory.component';

describe('PersonalotherstatutoryComponent', () => {
  let component: PersonalotherstatutoryComponent;
  let fixture: ComponentFixture<PersonalotherstatutoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalotherstatutoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalotherstatutoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
