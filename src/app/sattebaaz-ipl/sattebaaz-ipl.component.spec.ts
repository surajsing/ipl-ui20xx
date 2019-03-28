import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SattebaazIplComponent } from './sattebaaz-ipl.component';

describe('SattebaazIplComponent', () => {
  let component: SattebaazIplComponent;
  let fixture: ComponentFixture<SattebaazIplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SattebaazIplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SattebaazIplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
