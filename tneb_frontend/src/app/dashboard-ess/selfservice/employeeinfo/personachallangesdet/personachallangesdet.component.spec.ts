import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonachallangesdetComponent } from './personachallangesdet.component';

describe('PersonachallangesdetComponent', () => {
  let component: PersonachallangesdetComponent;
  let fixture: ComponentFixture<PersonachallangesdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonachallangesdetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonachallangesdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
