import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrderDetailsComponent } from './create-order-details.component';

describe('CreateOrderDetailsComponent', () => {
  let component: CreateOrderDetailsComponent;
  let fixture: ComponentFixture<CreateOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrderDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
