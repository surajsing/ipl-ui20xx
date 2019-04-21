import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SattebaazErrorComponent } from './sattebaaz-error.component';

describe('SattebaazErrorComponent', () => {
  let component: SattebaazErrorComponent;
  let fixture: ComponentFixture<SattebaazErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SattebaazErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SattebaazErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
