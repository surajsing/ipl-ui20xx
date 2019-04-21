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

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
