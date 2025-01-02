import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoapplyComponent } from './loapply.component';

describe('LoapplyComponent', () => {
  let component: LoapplyComponent;
  let fixture: ComponentFixture<LoapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoapplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
