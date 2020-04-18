import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeviewdailyupdateComponent } from './employeeviewdailyupdate.component';

describe('EmployeeviewdailyupdateComponent', () => {
  let component: EmployeeviewdailyupdateComponent;
  let fixture: ComponentFixture<EmployeeviewdailyupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeviewdailyupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeviewdailyupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
