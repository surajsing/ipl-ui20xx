import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  name : string,
  holdingValue : string
}

@Component({
  selector: 'app-sattebaaz-dialog',
  templateUrl: './sattebaaz-dialog.component.html',
  styleUrls: ['./sattebaaz-dialog.component.scss']
})
export class SattebaazDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SattebaazDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    isUserLoggedIn() {
      if (localStorage.getItem('username')) {
        if ((localStorage.getItem('username') === 'suraj') ||
          (localStorage.getItem('username') === 'kailash') ||
          (localStorage.getItem('username') === 'kalpesh') ||
          (localStorage.getItem('username') === 'neeraj') ||
          (localStorage.getItem('username') === 'pooja') ||
          (localStorage.getItem('username') === 'manasi') ||
          (localStorage.getItem('username') === 'radhika') ||
          (localStorage.getItem('username') === 'snehal') ||
          (localStorage.getItem('username') === 'pratik') ||
          (localStorage.getItem('username') === 'siddhu') ||
          (localStorage.getItem('username') === 'tushar') ||
          (localStorage.getItem('username') === 'neha') ||
          (localStorage.getItem('username') === 'param') ||
          (localStorage.getItem('username') === 'poonam') ||
          (localStorage.getItem('username') === 'shruti')) {
          return true;
        }
      } else {
        return false;
      }
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
