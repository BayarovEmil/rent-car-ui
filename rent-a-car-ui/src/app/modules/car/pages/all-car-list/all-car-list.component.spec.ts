import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCarListComponent } from './all-car-list.component';

describe('AllCarListComponent', () => {
  let component: AllCarListComponent;
  let fixture: ComponentFixture<AllCarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllCarListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
