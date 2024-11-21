import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAnnouncementComponent } from './add-new-announcement.component';

describe('AddNewAnnouncementComponent', () => {
  let component: AddNewAnnouncementComponent;
  let fixture: ComponentFixture<AddNewAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewAnnouncementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
