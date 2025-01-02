import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeorgdetComponent } from './employeeorgdet.component';

describe('EmployeeorgdetComponent', () => {
  let component: EmployeeorgdetComponent;
  let fixture: ComponentFixture<EmployeeorgdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeorgdetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeorgdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
