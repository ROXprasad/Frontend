import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseridleComponent } from './useridle.component';

describe('UseridleComponent', () => {
  let component: UseridleComponent;
  let fixture: ComponentFixture<UseridleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseridleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseridleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
