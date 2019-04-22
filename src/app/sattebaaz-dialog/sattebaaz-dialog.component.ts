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
      if ((localStorage.getItem('loginToken'))!=null) {
        let token = localStorage.getItem('loginToken');
        let userName : string = atob(token);
        if ((userName === 'suraj') ||
          (userName === 'kailash') ||
          (userName === 'kalpesh') ||
          (userName === 'neeraj') ||
          (userName === 'pooja') ||
          (userName === 'manasi') ||
          (userName === 'radhika') ||
          (userName === 'snehal') ||
          (userName === 'pratik') ||
          (userName === 'siddhu') ||
          (userName === 'tushar') ||
          (userName === 'neha') ||
          (userName === 'param') ||
          (userName === 'poonam') ||
          (userName === 'shruti')) {
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
