import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SattebaazStatsBoardComponent } from './sattebaaz-stats-board.component';

describe('SattebaazStatsBoardComponent', () => {
  let component: SattebaazStatsBoardComponent;
  let fixture: ComponentFixture<SattebaazStatsBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SattebaazStatsBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SattebaazStatsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
