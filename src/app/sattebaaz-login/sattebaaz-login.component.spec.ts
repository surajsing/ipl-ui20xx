import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SattebaazLoginComponent } from './sattebaaz-login.component';

describe('SattebaazLoginComponent', () => {
  let component: SattebaazLoginComponent;
  let fixture: ComponentFixture<SattebaazLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SattebaazLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SattebaazLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
