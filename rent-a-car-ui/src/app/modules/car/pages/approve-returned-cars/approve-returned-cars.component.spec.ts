import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveReturnedCarsComponent } from './approve-returned-cars.component';

describe('ApproveReturnedCarsComponent', () => {
  let component: ApproveReturnedCarsComponent;
  let fixture: ComponentFixture<ApproveReturnedCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproveReturnedCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproveReturnedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
