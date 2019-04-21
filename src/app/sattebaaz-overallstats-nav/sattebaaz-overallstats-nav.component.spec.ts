import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SattebaazOverallstatsNavComponent } from './sattebaaz-overallstats-nav.component';

describe('SattebaazOverallstatsNavComponent', () => {
  let component: SattebaazOverallstatsNavComponent;
  let fixture: ComponentFixture<SattebaazOverallstatsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SattebaazOverallstatsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SattebaazOverallstatsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
