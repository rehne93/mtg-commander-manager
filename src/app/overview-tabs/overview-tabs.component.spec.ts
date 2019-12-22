import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewTabsComponent } from './overview-tabs.component';

describe('OverviewTabsComponent', () => {
  let component: OverviewTabsComponent;
  let fixture: ComponentFixture<OverviewTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
