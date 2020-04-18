import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CempComponent } from './cemp.component';

describe('CempComponent', () => {
  let component: CempComponent;
  let fixture: ComponentFixture<CempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
