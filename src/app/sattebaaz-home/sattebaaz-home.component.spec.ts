import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SattebaazHomeComponent } from './sattebaaz-home.component';

describe('SattebaazHomeComponent', () => {
  let component: SattebaazHomeComponent;
  let fixture: ComponentFixture<SattebaazHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SattebaazHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SattebaazHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
