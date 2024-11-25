import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrderDetailsComponent } from './update-order-details.component';

describe('UpdateOrderDetailsComponent', () => {
  let component: UpdateOrderDetailsComponent;
  let fixture: ComponentFixture<UpdateOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateOrderDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
