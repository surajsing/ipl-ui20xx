import { SattebaazDialogComponent } from './../sattebaaz-dialog/sattebaaz-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-sattebaaz-navs',
  templateUrl: './sattebaaz-navs.component.html',
  styleUrls: ['./sattebaaz-navs.component.scss']
})
export class SattebaazNavsComponent implements OnInit {

  name : string;
  holdingValue : string;

  constructor(public dialog: MatDialog, private router: Router) { }

  openDialogBox() : void{
    const dialogRef = this.dialog.open(SattebaazDialogComponent, {
      width: '250px',
      data: {name: this.name, holdingValue: this.holdingValue}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.holdingValue = result;
    });
  }

  logOut(){
    localStorage.removeItem('username');
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
