import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCommanderViewComponent } from './single-commander-view.component';

describe('SingleCommanderViewComponent', () => {
  let component: SingleCommanderViewComponent;
  let fixture: ComponentFixture<SingleCommanderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCommanderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCommanderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
