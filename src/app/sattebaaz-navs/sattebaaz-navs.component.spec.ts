import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SattebaazNavsComponent } from './sattebaaz-navs.component';

describe('SattebaazNavsComponent', () => {
  let component: SattebaazNavsComponent;
  let fixture: ComponentFixture<SattebaazNavsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SattebaazNavsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SattebaazNavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
