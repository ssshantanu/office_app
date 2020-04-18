import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemployeedetailComponent } from './viewemployeedetail.component';

describe('ViewemployeedetailComponent', () => {
  let component: ViewemployeedetailComponent;
  let fixture: ComponentFixture<ViewemployeedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewemployeedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewemployeedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
