import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductDetailsComponent } from './single-product-details.component';

describe('SingleProductDetailsComponent', () => {
  let component: SingleProductDetailsComponent;
  let fixture: ComponentFixture<SingleProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProductDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductComponent } from './single-product.component';

describe('SingleProductComponent', () => {
  let component: SingleProductComponent;
  let fixture: ComponentFixture<SingleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 */