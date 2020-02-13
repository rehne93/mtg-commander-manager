import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanderOverviewComponent } from './commander-overview.component';

describe('CommanderOverviewComponent', () => {
  let component: CommanderOverviewComponent;
  let fixture: ComponentFixture<CommanderOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommanderOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommanderOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
