import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmenttestComponent } from './departmenttest.component';

describe('DepartmenttestComponent', () => {
  let component: DepartmenttestComponent;
  let fixture: ComponentFixture<DepartmenttestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmenttestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmenttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
