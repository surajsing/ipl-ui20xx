import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SattebaazHeaderComponent } from './sattebaaz-header.component';

describe('SattebaazHeaderComponent', () => {
  let component: SattebaazHeaderComponent;
  let fixture: ComponentFixture<SattebaazHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SattebaazHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SattebaazHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
