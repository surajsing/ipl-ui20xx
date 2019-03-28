import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SattebaazOverallStatsComponent } from './sattebaaz-overall-stats.component';

describe('SattebaazOverallStatsComponent', () => {
  let component: SattebaazOverallStatsComponent;
  let fixture: ComponentFixture<SattebaazOverallStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SattebaazOverallStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SattebaazOverallStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
