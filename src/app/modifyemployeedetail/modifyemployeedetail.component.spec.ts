import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyemployeedetailComponent } from './modifyemployeedetail.component';

describe('ModifyemployeedetailComponent', () => {
  let component: ModifyemployeedetailComponent;
  let fixture: ComponentFixture<ModifyemployeedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyemployeedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyemployeedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
