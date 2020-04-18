import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedailyupdatedetailComponent } from './employeedailyupdatedetail.component';

describe('EmployeedailyupdatedetailComponent', () => {
  let component: EmployeedailyupdatedetailComponent;
  let fixture: ComponentFixture<EmployeedailyupdatedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeedailyupdatedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedailyupdatedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
