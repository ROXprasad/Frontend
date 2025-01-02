import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderpercentageComponent } from './loaderpercentage.component';

describe('LoaderpercentageComponent', () => {
  let component: LoaderpercentageComponent;
  let fixture: ComponentFixture<LoaderpercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderpercentageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderpercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
