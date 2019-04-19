import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SattebaazLastUpdateComponent } from '../sattebaaz-last-update/sattebaaz-last-update.component';

@Component({
  selector: 'app-sattebaaz-ipl',
  templateUrl: './sattebaaz-ipl.component.html',
  styleUrls: ['./sattebaaz-ipl.component.scss']
})
export class SattebaazIplComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  openLastUpdatedBar() {
    setTimeout(() => {
      this.snackBar.openFromComponent(SattebaazLastUpdateComponent,
        { duration: 10000, panelClass: 'lastUpdated' });
    });
  }

  ngOnInit() {
    this.openLastUpdatedBar();
  }

}
