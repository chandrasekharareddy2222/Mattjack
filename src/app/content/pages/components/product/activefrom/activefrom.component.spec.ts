import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivefromComponent } from './activefrom.component';

describe('ActivefromComponent', () => {
  let component: ActivefromComponent;
  let fixture: ComponentFixture<ActivefromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivefromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivefromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
