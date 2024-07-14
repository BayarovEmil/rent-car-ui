import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnedCarsComponent } from './returned-cars.component';

describe('ReturnedCarsComponent', () => {
  let component: ReturnedCarsComponent;
  let fixture: ComponentFixture<ReturnedCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnedCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReturnedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
