import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivaladvanceComponent } from './festivaladvance.component';

describe('FestivaladvanceComponent', () => {
  let component: FestivaladvanceComponent;
  let fixture: ComponentFixture<FestivaladvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FestivaladvanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FestivaladvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
