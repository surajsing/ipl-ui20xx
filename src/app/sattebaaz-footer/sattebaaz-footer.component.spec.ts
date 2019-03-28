import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SattebaazFooterComponent } from './sattebaaz-footer.component';

describe('SattebaazFooterComponent', () => {
  let component: SattebaazFooterComponent;
  let fixture: ComponentFixture<SattebaazFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SattebaazFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SattebaazFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
