import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetainformationComponent } from './metainformation.component';

describe('MetainformationComponent', () => {
  let component: MetainformationComponent;
  let fixture: ComponentFixture<MetainformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetainformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetainformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
