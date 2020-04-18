import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VempComponent } from './vemp.component';

describe('VempComponent', () => {
  let component: VempComponent;
  let fixture: ComponentFixture<VempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
