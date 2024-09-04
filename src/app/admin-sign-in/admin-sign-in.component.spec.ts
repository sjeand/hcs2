import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSignInComponent } from './admin-sign-in.component';

describe('AdminSignInComponent', () => {
  let component: AdminSignInComponent;
  let fixture: ComponentFixture<AdminSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSignInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); */
