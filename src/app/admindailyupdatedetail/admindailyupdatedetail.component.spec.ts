import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindailyupdatedetailComponent } from './admindailyupdatedetail.component';

describe('AdmindailyupdatedetailComponent', () => {
  let component: AdmindailyupdatedetailComponent;
  let fixture: ComponentFixture<AdmindailyupdatedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindailyupdatedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindailyupdatedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
