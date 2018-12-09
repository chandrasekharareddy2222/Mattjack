import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossellsComponent } from './crossells.component';

describe('CrossellsComponent', () => {
  let component: CrossellsComponent;
  let fixture: ComponentFixture<CrossellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
