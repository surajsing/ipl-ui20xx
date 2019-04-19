import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SattebaazLastUpdateComponent } from './sattebaaz-last-update.component';

describe('SattebaazLastUpdateComponent', () => {
  let component: SattebaazLastUpdateComponent;
  let fixture: ComponentFixture<SattebaazLastUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SattebaazLastUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SattebaazLastUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
