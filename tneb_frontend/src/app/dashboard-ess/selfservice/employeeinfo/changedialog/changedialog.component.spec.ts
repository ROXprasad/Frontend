import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedialogComponent } from './changedialog.component';

describe('ChangedialogComponent', () => {
  let component: ChangedialogComponent;
  let fixture: ComponentFixture<ChangedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangedialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
