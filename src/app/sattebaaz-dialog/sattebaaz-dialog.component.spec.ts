import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SattebaazDialogComponent } from './sattebaaz-dialog.component';

describe('SattebaazDialogComponent', () => {
  let component: SattebaazDialogComponent;
  let fixture: ComponentFixture<SattebaazDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SattebaazDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SattebaazDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
