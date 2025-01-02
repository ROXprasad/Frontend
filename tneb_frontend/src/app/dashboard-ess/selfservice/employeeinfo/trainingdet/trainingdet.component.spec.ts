import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingdetComponent } from './trainingdet.component';

describe('TrainingdetComponent', () => {
  let component: TrainingdetComponent;
  let fixture: ComponentFixture<TrainingdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingdetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
