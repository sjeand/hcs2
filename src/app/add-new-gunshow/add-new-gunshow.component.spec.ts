import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewGunshowComponent } from './add-new-gunshow.component';

describe('AddNewGunshowComponent', () => {
  let component: AddNewGunshowComponent;
  let fixture: ComponentFixture<AddNewGunshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewGunshowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewGunshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
